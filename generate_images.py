# generate_images.py
from PIL import Image, ImageDraw, ImageFont
import os

# Create images directory if it doesn't exist
os.makedirs('static/images', exist_ok=True)

# List of all food items organized by category
FOOD_ITEMS = {
    'breakfast': [
        'poha', 'upma', 'idli_sambhar', 'masala_idli', 'aloo_paratha',
        'amritsari_paratha', 'paneer_paratha', 'cheese_paratha', 'bread_butter'
    ],
    'lunch': [
        'half_dish', 'full_dish', 'punjabi_dish', 'punjabi_full',
        'pav_bhaji', 'chole_bhature'
    ],
    'snacks': [
        'samosa', 'samosa_chat', 'ragda_samosa', 'veg_puff', 'cheese_puff',
        'tandoori_puff', 'chinese_puff', 'butter_dabeli', 'butter_sev_onion_dabeli',
        'butter_cheese_sev_dabeli', 'butter_masala_vadapav', 'butter_cheese_vadapav',
        'double_butter_vadapav', 'veg_cheese_grill', 'bombay_veg_cheese',
        'plain_cheese_grill', 'bombay_cheese_chutney', 'veg_mayo_cheese',
        'tandoori_paneer_grill', 'jalapeno_cheese', 'veg_mayo_cheese_extra',
        'butter_cheese_sandwich', 'samosa_cheese_sandwich', 'veg_burger',
        'grilled_veg_burger', 'veg_club_sandwich', 'chilli_cheese_toast',
        'veg_cheese_tosties', 'veg_cheese_pizza', 'french_fries', 'salted_fries',
        'masala_fries', 'peri_peri_fries', 'cheese_fries', 'salad', 'veg_soup'
    ],
    'dinner': [
        'hakka_noodles', 'manchurian_noodles', 'manchurian_rice', 'veg_fried_rice',
        'manchurian_dry', 'chinese_bhel', 'paneer_chilli', 'chilli_paneer'
    ],
    'beverages': [
        'tea'
    ]
}

# Color scheme by category (RGB)
COLORS = {
    'breakfast': '#FFE082',   # Yellow
    'lunch': '#81C784',       # Green
    'snacks': '#EF5350',      # Red
    'dinner': '#64B5F6',      # Blue
    'beverages': '#BA68C8'    # Purple
}

def hex_to_rgb(hex_color):
    """Convert hex color to RGB tuple"""
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def generate_image(filename, item_name, color_hex):
    """Generate a placeholder image with item name"""
    color_rgb = hex_to_rgb(color_hex)
    img = Image.new('RGB', (200, 140), color=color_rgb)
    draw = ImageDraw.Draw(img)
    
    # Try to use a nice font, fallback to default
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 13)
    except:
        try:
            font = ImageFont.truetype("C:\\Windows\\Fonts\\arial.ttf", 13)  # Windows
        except:
            font = ImageFont.load_default()
    
    # Format text (convert snake_case to Title Case)
    text = item_name.replace('_', ' ').title()
    
    # Get text bounding box for centering
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    x = (200 - text_width) // 2
    y = (140 - text_height) // 2
    
    # Draw text with white color
    draw.text((x, y), text, fill='white', font=font)
    img.save(f'static/images/{filename}.png')
    print(f'✓ Generated: {filename}.png')

# Generate all images
total = 0
for category, items in FOOD_ITEMS.items():
    color = COLORS[category]
    print(f"\n📂 Generating {category.upper()} images ({len(items)} items)...")
    for item in items:
        generate_image(item, item, color)
        total += 1

print(f"\n✅ All {total} images generated successfully!")
print(f"📁 Images saved to: static/images/")