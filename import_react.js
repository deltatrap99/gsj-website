const fs = require('fs');

async function importReactPage(url, outputPath) {
    const res = await fetch(url);
    const buffer = await res.arrayBuffer();
    const html = Buffer.from(buffer).toString('utf-8');
    
    const scriptMatch = html.match(/<script type="text\/babel">([\s\S]*?)<\/script>/i);
    let code = scriptMatch ? scriptMatch[1] : html;
    
    if (!scriptMatch) {
        console.log("No babel script found!");
        return;
    }
    
    // Remove React DOM and Router logic
    code = code.replace(/const\s+\{.*\}\s*=\s*React;/gi, 'import React, { useState, useEffect } from "react";\nimport { CheckCircle, Info, ArrowRight, PlayCircle, Menu, X, ArrowUpRight, GraduationCap, Award, BookOpen, Lightbulb, Users, FileText, ChevronRight } from "lucide-react";'); // Sometimes it uses lucide or other icons
    code = code.replace(/const\s+\{.*\}\s*=\s*ReactDOM;/gi, '');
    code = code.replace(/const\s+\{.*\}\s*=\s*ReactRouterDOM;/gi, 'import Link from "next/link";');
    
    // Replace <Link to="..."> with <Link href="...">
    code = code.replace(/<Link([^>]*?)to=/g, '<Link$1href=');
    
    // Remove navigate and location
    code = code.replace(/const navigate = useNavigate\(\);/g, '');
    
    // Rename App to Home
    code = code.replace(/const App = \(\) => \{/g, 'export default function Home() {');
    
    // Remove root render
    code = code.replace(/const root = createRoot.*/g, '');
    code = code.replace(/root\.render.*/g, '');
    
    // Handle standard JSX issues
    // Just in case, it's pure React so it should be fine.
    
    const finalCode = `"use client";\n` + code;
    
    fs.writeFileSync(outputPath, finalCode, 'utf-8');
    console.log("Written successfully");
}

importReactPage(
    "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2Y5NGMwOTJjZTZkYTQ3MzZhYTQ3ZmNlZmEzYWQ3Y2YzEgsSBxDfncOuqRQYAZIBIwoKcHJvamVjdF9pZBIVQhMzODE5MzkzNzg4NDI1Njk3OTM4&filename=&opi=89354086",
    "./src/app/page.tsx"
);
