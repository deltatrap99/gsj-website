const fs = require('fs');

async function importPage(url, outputPath, componentName) {
  try {
    const res = await fetch(url);
    const buffer = await res.arrayBuffer();
    // Decode as utf-8
    let html = new TextDecoder("utf-8").decode(buffer);
    
    // Extract body content between <body> and </body>
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let content = "";
    if (bodyMatch) {
        content = bodyMatch[1];
    } else {
        content = html; // fallback
    }
    
    // Basic React conversions
    content = content.replace(/class=/g, 'className=');
    content = content.replace(/<!--[\s\S]*?-->/g, ''); // Remove comments
    
    // Fix empty tags
    content = content.replace(/<img(.*?)(?<!\/)>/g, '<img$1 />');
    content = content.replace(/<input(.*?)(?<!\/)>/g, '<input$1 />');
    content = content.replace(/<br(.*?)(?<!\/)>/g, '<br$1 />');
    content = content.replace(/<hr(.*?)(?<!\/)>/g, '<hr$1 />');
    // Fix unclosed links that might be self-closing (rare, but just format generally)
    
    const jsxContent = `"use client";

import Link from "next/link";
import Image from "next/image";

export default function ${componentName}() {
  return (
    <>
      ${content}
    </>
  );
}
`;

    fs.mkdirSync(outputPath.substring(0, outputPath.lastIndexOf('/')), { recursive: true });
    fs.writeFileSync(outputPath, jsxContent, 'utf-8');
    console.log(`Successfully written ${componentName} to ${outputPath}`);
  } catch (e) {
      console.log("Error writing", componentName, e.message);
  }
}

async function runAll() {
  const pages = [
      {
          url: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2RiOTJiMDk3NTQwODQyMmFiMDU1MGZkMGMwOWZmYWIwEgsSBxDfncOuqRQYAZIBIwoKcHJvamVjdF9pZBIVQhMzODE5MzkzNzg4NDI1Njk3OTM4&filename=&opi=89354086",
          path: "./src/app/programs/page.tsx",
          name: "Programs"
      },
      {
          url: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzA0ODcxM2ZiN2I5NDRiOTE5ODA5MmVkMGE2NDBlMmFlEgsSBxDfncOuqRQYAZIBIwoKcHJvamVjdF9pZBIVQhMzODE5MzkzNzg4NDI1Njk3OTM4&filename=&opi=89354086",
          path: "./src/app/research/page.tsx",
          name: "Research"
      },
      {
          url: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzIwYTFjODZlZTYwMDQ3ZDRiZmI4ZjdhZDRiYzMwOGFhEgsSBxDfncOuqRQYAZIBIwoKcHJvamVjdF9pZBIVQhMzODE5MzkzNzg4NDI1Njk3OTM4&filename=&opi=89354086",
          path: "./src/app/programs/sat-elite/page.tsx",
          name: "SATElite"
      },
      {
          url: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2I5MGYzMWEzODRlMDQyZjI5N2EzM2FkODFmNjdhYjdjEgsSBxDfncOuqRQYAZIBIwoKcHJvamVjdF9pZBIVQhMzODE5MzkzNzg4NDI1Njk3OTM4&filename=&opi=89354086",
          path: "./src/app/achievements/page.tsx",
          name: "Achievements"
      },
      {
          url: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzRjNGU2NjU4MjNkMTRlNGRiMzgzN2NjYzc3ZDM4OTVmEgsSBxDfncOuqRQYAZIBIwoKcHJvamVjdF9pZBIVQhMzODE5MzkzNzg4NDI1Njk3OTM4&filename=&opi=89354086",
          path: "./src/app/register/page.tsx",
          name: "Register"
      }
  ];

  for (const page of pages) {
      await importPage(page.url, page.path, page.name);
  }
}

runAll();
