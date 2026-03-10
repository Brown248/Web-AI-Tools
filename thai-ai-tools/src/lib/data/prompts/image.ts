import { CustomPrompt } from './index';

export const imagePrompts: CustomPrompt[] = [
{
id: "image-1",
purpose: "🎨 สร้างภาพสินค้าแบบโฆษณาระดับมืออาชีพ",
promptTh: `
คุณคือผู้เชี่ยวชาญด้านการสร้างภาพโฆษณาสินค้า

ช่วยสร้าง Prompt สำหรับ AI สร้างภาพสินค้า

สินค้า:
[ใส่ชื่อสินค้า]

ประเภทสินค้า:
[เช่น เทคโนโลยี / เครื่องสำอาง / อาหาร]

Mood & Tone:
[เช่น luxury / modern / minimal]

พื้นหลัง:
[เช่น studio / futuristic / nature]

สไตล์ภาพ:
[photorealistic / cinematic / product photography]

แสง:
[soft lighting / dramatic lighting / studio lighting]

คุณภาพภาพ:
4K, ultra realistic, professional commercial photography
`,
promptEn: `
You are an expert in product advertising visuals.

Create an AI image prompt for a product.

Product:
[Insert product name]

Category:
[e.g. tech / cosmetics / food]

Mood & Tone:
[e.g. luxury / modern / minimal]

Background:
[e.g. studio / futuristic / nature]

Style:
[photorealistic / cinematic / product photography]

Lighting:
[soft lighting / dramatic lighting / studio lighting]

Image Quality:
4K, ultra realistic, commercial advertising photography
`,
category: "Image Generation",
toolName: "Midjourney",
toolSlug: "midjourney",
logoUrl: "/logos/AI-Image/Midjourney.png"
},

{
id: "image-2",
purpose: "🌄 สร้างภาพ Landscape Cinematic",
promptTh: `
ช่วยสร้าง Prompt สำหรับภาพ Landscape

สถานที่:
[เช่น ภูเขา / เมือง / ทะเล]

ช่วงเวลา:
[เช่น sunrise / sunset / night]

สไตล์:
[cinematic / fantasy / realistic]

บรรยากาศ:
[dramatic / peaceful / epic]

รายละเอียดเพิ่มเติม:
clouds, volumetric lighting, ultra detailed, wide angle
`,
promptEn: `
Generate an image prompt for a cinematic landscape.

Location:
[e.g. mountains / city / ocean]

Time of day:
[sunrise / sunset / night]

Style:
[cinematic / fantasy / realistic]

Atmosphere:
[dramatic / peaceful / epic]

Additional details:
clouds, volumetric lighting, ultra detailed, wide angle
`,
category: "Image Generation",
toolName: "DALL·E",
toolSlug: "dalle",
logoUrl: "/logos/AI-Image/OpenAI – DALL·E.png"
},

{
id: "image-3",
purpose: "🧑‍🎨 สร้างตัวละครแฟนตาซี",
promptTh: `
สร้าง Prompt สำหรับตัวละครแฟนตาซี

ประเภทตัวละคร:
[เช่น warrior / wizard / cyberpunk hacker]

เพศ:
[male / female]

สไตล์:
[anime / realistic / concept art]

เสื้อผ้า:
[อธิบาย]

อาวุธหรืออุปกรณ์:
[อธิบาย]

รายละเอียด:
high detail, epic fantasy art, dramatic lighting
`,
promptEn: `
Create a fantasy character image prompt.

Character type:
[e.g. warrior / wizard / cyberpunk hacker]

Gender:
[male / female]

Style:
[anime / realistic / concept art]

Clothing:
[describe]

Weapon or gear:
[describe]

Details:
high detail, epic fantasy concept art, dramatic lighting
`,
category: "Image Generation",
toolName: "Stable Diffusion",
toolSlug: "stable-diffusion",
logoUrl: "/logos/AI-Image/Stability AI.png"
},

{
id: "image-4",
purpose: "🏙️ สร้างเมืองอนาคต Sci-Fi",
promptTh: `
สร้างภาพเมืองอนาคต

ธีมเมือง:
[cyberpunk / utopian / dystopian]

เวลา:
[day / night]

สไตล์ภาพ:
[sci-fi / cinematic]

รายละเอียด:
neon lights, flying cars, skyscrapers, ultra detailed
`,
promptEn: `
Generate a futuristic city image.

City theme:
[cyberpunk / utopian / dystopian]

Time:
[day / night]

Style:
[sci-fi / cinematic]

Details:
neon lights, flying cars, skyscrapers, ultra detailed
`,
category: "Image Generation",
toolName: "Midjourney",
toolSlug: "midjourney",
logoUrl: "/logos/AI-Image/Midjourney.png"
},

{
id: "image-6",
purpose: "🎮 Concept Art สำหรับเกม",
promptTh: `
สร้าง Prompt สำหรับ Concept Art เกม

ประเภทเกม:
[RPG / sci-fi / fantasy]

ฉาก:
[forest / dungeon / space]

บรรยากาศ:
[mysterious / epic]

สไตล์:
concept art, game environment design
`,
promptEn: `
Create a prompt for game concept art.

Game genre:
[RPG / sci-fi / fantasy]

Scene:
[forest / dungeon / space]

Mood:
[mysterious / epic]

Style:
concept art, game environment design
`,
category: "Image Generation",
toolName: "Stable Diffusion",
toolSlug: "stable-diffusion",
logoUrl: "/logos/AI-Image/Stability AI.png"
},

{
id: "image-7",
purpose: "👗 สร้างภาพแฟชั่น Editorial",
promptTh: `
สร้างภาพแฟชั่นระดับนิตยสาร

ประเภทแฟชั่น:
[streetwear / luxury / futuristic]

สถานที่:
[studio / city street]

ท่าทาง:
[pose description]

สไตล์:
editorial fashion photography
`,
promptEn: `
Generate a fashion editorial image.

Fashion type:
[streetwear / luxury / futuristic]

Location:
[studio / city street]

Pose:
[describe pose]

Style:
editorial fashion photography
`,
category: "Image Generation",
toolName: "Adobe Firefly",
toolSlug: "firefly",
logoUrl: "/logos/AI-Image/Adobe Firefly.png"
},

{
id: "image-8",
purpose: "🐉 สร้างสัตว์แฟนตาซี",
promptTh: `
สร้างสัตว์แฟนตาซี

ประเภท:
[dragon / phoenix / mythical creature]

สภาพแวดล้อม:
[mountain / sky / lava]

สไตล์:
fantasy illustration

รายละเอียด:
epic lighting, ultra detailed
`,
promptEn: `
Create a fantasy creature image.

Creature:
[dragon / phoenix / mythical creature]

Environment:
[mountain / sky / lava]

Style:
fantasy illustration

Details:
epic lighting, ultra detailed
`,
category: "Image Generation",
toolName: "Midjourney",
toolSlug: "midjourney",
logoUrl: "/logos/AI-Image/Midjourney.png"
},

{
id: "image-10",
purpose: "🏡 สร้างภาพสถาปัตยกรรม",
promptTh: `
สร้างภาพสถาปัตยกรรม

ประเภทอาคาร:
[modern house / skyscraper]

สไตล์:
[minimal / futuristic / luxury]

เวลา:
[day / sunset]

คุณภาพ:
architectural visualization, ultra realistic
`,
promptEn: `
Create an architectural visualization.

Building type:
[modern house / skyscraper]

Style:
[minimal / futuristic / luxury]

Time:
[day / sunset]

Quality:
ultra realistic architectural render
`,
category: "Image Generation",
toolName: "DALL·E",
toolSlug: "dalle",
logoUrl: "/logos/AI-Image/OpenAI – DALL·E.png"
}

];