from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os

width, height = 1200, 630

base = Image.new('RGBA', (width, height), (12, 17, 29, 255))
base_draw = ImageDraw.Draw(base)
for y in range(height):
    ratio = y / height
    r = int(10 + ratio * 5)
    g = int(14 + ratio * 7)
    b = int(26 + ratio * 12)
    base_draw.line([(0, y), (width, y)], fill=(r, g, b, 255))

lights = Image.new('RGBA', (width, height), (0, 0, 0, 0))
lights_draw = ImageDraw.Draw(lights)
lights_draw.ellipse([720, -120, 1320, 480], fill=(234, 179, 8, 75)) 
lights_draw.ellipse([-160, 240, 440, 740], fill=(14, 165, 233, 65))
lights_draw.ellipse([450, 160, 850, 560], fill=(99, 102, 241, 35)) 
lights = lights.filter(ImageFilter.GaussianBlur(120))
img = Image.alpha_composite(base, lights)

dot_layer = Image.new('RGBA', (width, height), (0, 0, 0, 0))
dot_draw = ImageDraw.Draw(dot_layer)
for x in range(40, width, 40):
    for y in range(40, height, 40):
        dot_draw.ellipse([x - 1, y - 1, x + 1, y + 1], fill=(255, 255, 255, 15))
img = Image.alpha_composite(img, dot_layer)

card_margin_x = 55
card_margin_y = 50
card_w = width - 2 * card_margin_x
card_h = height - 2 * card_margin_y

card = Image.new('RGBA', (width, height), (0, 0, 0, 0))
card_draw = ImageDraw.Draw(card)

card_draw.rounded_rectangle(
    [card_margin_x, card_margin_y, card_margin_x + card_w, card_margin_y + card_h],
    radius=24,
    fill=(15, 23, 42, 210),
    outline=(148, 163, 184, 45),
    width=1
)

badge_layer = Image.new('RGBA', (width, height), (0, 0, 0, 0))
b_draw = ImageDraw.Draw(badge_layer)

px, py = 110, 95
b_draw.rounded_rectangle([px, py, px + 150, py + 40], radius=20, fill=(234, 179, 8, 35), outline=(234, 179, 8, 160), width=1)

dx, dy = 900, 95
b_draw.rounded_rectangle([dx, dy, dx + 190, dy + 40], radius=20, fill=(30, 41, 59, 220), outline=(100, 116, 139, 130), width=1)
b_draw.ellipse([dx + 18, dy + 15, dx + 28, dy + 25], fill=(34, 197, 94, 255)) 

img = Image.alpha_composite(img, card)
img = Image.alpha_composite(img, badge_layer)
draw = ImageDraw.Draw(img)

try:
    font_badge = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf', 16)
    font_greeting = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf', 52)
    font_name = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf', 52)
    font_role = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf', 34)
    font_desc = ImageFont.truetype('C:/Windows/Fonts/segoeui.ttf', 22)
    font_tag = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf', 18)
    font_domain = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf', 19)
except Exception:
    font_badge = font_greeting = font_name = font_role = font_desc = font_tag = font_domain = ImageFont.load_default()

draw.text((px + 23, py + 10), "PORTFOLIO", font=font_badge, fill=(250, 204, 21, 255))
draw.text((dx + 38, dy + 9), "kriiif.pages.dev", font=font_domain, fill=(241, 245, 249, 255))

content_x = 110
greeting_y = 175
draw.text((content_x, greeting_y), "Hi, I'm ", font=font_greeting, fill=(255, 255, 255, 255))
prefix_len = draw.textlength("Hi, I'm ", font=font_greeting)
draw.text((content_x + prefix_len, greeting_y), "Muhammad Fikri", font=font_name, fill=(250, 204, 21, 255))

role_y = 250
draw.text((content_x, role_y), "Front-end Developer & UI/UX Enthusiast", font=font_role, fill=(226, 232, 240, 255))

desc_y = 315
draw.text((content_x, desc_y), "CS Student at State University of Jakarta.", font=font_desc, fill=(148, 163, 184, 255))
draw.text((content_x, desc_y + 36), "Passionate in building modern, interactive, and responsive web applications.", font=font_desc, fill=(148, 163, 184, 255))

draw.line([(content_x, 420), (width - 110, 420)], fill=(255, 255, 255, 28), width=1)

tags_layer = Image.new('RGBA', (width, height), (0, 0, 0, 0))
t_draw = ImageDraw.Draw(tags_layer)

tags = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Laravel", "Docker"]
tag_x = content_x
tag_y = 455

for t in tags:
    tl = draw.textlength(t, font=font_tag)
    tag_w = int(tl) + 32
    t_draw.rounded_rectangle([tag_x, tag_y, tag_x + tag_w, tag_y + 38], radius=19, fill=(30, 41, 59, 200), outline=(71, 85, 105, 180), width=1)
    tag_x += tag_w + 14

img = Image.alpha_composite(img, tags_layer)
draw = ImageDraw.Draw(img)

tag_x = content_x
for t in tags:
    tl = draw.textlength(t, font=font_tag)
    tag_w = int(tl) + 32
    draw.text((tag_x + 16, tag_y + 9), t, font=font_tag, fill=(226, 232, 240, 255))
    tag_x += tag_w + 14

os.makedirs('public', exist_ok=True)
img.convert('RGB').save('public/og-image.png', 'PNG', quality=95)
print('Updated public/og-image.png successfully!')
