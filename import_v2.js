const fs = require('fs');

async function importPage(url, outputPath, componentName) {
  try {
    const res = await fetch(url);
    const buffer = await res.arrayBuffer();
    let html = new TextDecoder("utf-8").decode(buffer);
    
    // Extract body content
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let content = bodyMatch ? bodyMatch[1] : html;
    
    // React specific conversions
    content = content.replace(/class=/g, 'className=');
    content = content.replace(/for=/g, 'htmlFor=');
    content = content.replace(/<!--[\s\S]*?-->/g, ''); // Remove comments
    
    // Handle inline styles correctly (just delete them if they are simple, but Stitch rarely uses them except occasionally)
    // Actually, simple Regex to get rid of simple style string
    content = content.replace(/style="[^"]*"/g, '');
    
    // Fix empty tags (img, input, hr, br) robustly
    content = content.replace(/<(img|input|hr|br|meta|link)([^>]*?)(\/?)>/gi, (match, tag, attrs) => {
        // Remove trailing slash from attrs if any
        let cleanAttrs = attrs;
        if (cleanAttrs.endsWith('/')) cleanAttrs = cleanAttrs.slice(0, -1);
        return `<${tag}${cleanAttrs} />`;
    });
    
    // Handle SVG paths (sometimes they have stroke-width -> strokeWidth or clip-rule -> clipRule)
    content = content.replace(/stroke-width=/g, 'strokeWidth=');
    content = content.replace(/stroke-linecap=/g, 'strokeLinecap=');
    content = content.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
    content = content.replace(/fill-rule=/g, 'fillRule=');
    content = content.replace(/clip-rule=/g, 'clipRule=');
    content = content.replace(/stroke-miterlimit=/g, 'strokeMiterlimit=');

    const jsxContent = `"use client";\nimport Link from "next/link";\nimport Image from "next/image";\n\nexport default function ${componentName}() {\n  return (\n    <>\n      ${content}\n    </>\n  );\n}\n`;

    fs.mkdirSync(outputPath.substring(0, outputPath.lastIndexOf('/')), { recursive: true });
    fs.writeFileSync(outputPath, jsxContent, 'utf-8');
    console.log(`Successfully written ${componentName} to ${outputPath}`);
  } catch (e) {
      console.log("Error writing", componentName, e.message);
  }
}

importPage(
    "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2Y5NGMwOTJjZTZkYTQ3MzZhYTQ3ZmNlZmEzYWQ3Y2YzEgsSBxDfncOuqRQYAZIBIwoKcHJvamVjdF9pZBIVQhMzODE5MzkzNzg4NDI1Njk3OTM4&filename=&opi=89354086",
    "./src/app/page.tsx",
    "Home"
).catch(console.error);
