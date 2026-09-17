# Taman Wisata Bougenville - Comprehensive Website Blueprint

## 🌟 1. Project Identity & Vision

### **Vision**
To create a digital sanctuary that mirrors the physical experience of Taman Wisata Bougenville: serene, luxurious, and deeply connected to nature. The website serves not just as a booking platform, but as a storytelling medium that transports users to the "Hidden Gem of Bandung."

### **Target Audience**
- **The Urban Escapist**: Jakarta/Bandung professionals seeking a weekend digital detox.
- **The Romantic**: Couples looking for intimate, private honeymoons or anniversaries.
- **The Family Planner**: Parents wanting a safe, educational, and nature-rich environment for kids.
- **The Corporate Lead**: HR/Managers planning executive retreats or team bonding.

### **Core Value Proposition**
"Luxury in Nature" - Combining the raw beauty of Mount Puntang's pine forests with 5-star comfort and service.

---

## 🎨 2. Design System & UI Guidelines

### **Aesthetic Direction: "Airbnb Luxe meets Tropical Zen"**
- **Visual Style**: Minimalist, image-heavy, generous whitespace, smooth motion.
- **Atmosphere**: Calm, premium, organic.

### **Color Palette**
| Color Name | Hex Code | Usage Rule |
|------------|----------|------------|
| **Forest Deep** | `#1F4A38` | Primary Backgrounds, Headings, Footer. Represents the deep pine forest. |
| **Forest Green** | `#2D5F4C` | Primary Buttons, Icons, Active States. The core brand color. |
| **Luxury Gold** | `#C8A95B` | Accents, "Book Now" buttons, Star ratings, Premium badges. Adds the "Luxe" feel. |
| **Terracotta** | `#C87E5B` | Warm accents, callouts. Represents the earth/wood. |
| **Sand Light** | `#F7F7F7` | Section backgrounds, Cards. Soft alternative to harsh white. |
| **Pure White** | `#FFFFFF` | Card backgrounds, Text on dark backgrounds. |

### **Typography System**
- **Display Font**: `Playfair Display` (Serif)
  - Usage: H1, H2, H3.
  - Vibe: Elegant, classic, editorial.
- **Body Font**: `Inter` (Sans-Serif)
  - Usage: Paragraphs, UI elements, Buttons, Navigation.
  - Vibe: Clean, modern, legible.

### **Micro-Interactions**
- **Hover States**: Images scale up (105%) slowly (700ms). Buttons lift and cast a deeper shadow.
- **Scroll Effects**: Elements "fade up" and "slide in" as the user scrolls down.
- **Transitions**: Page transitions are instant but content loads with a staggered fade-in effect.

---

## 🔄 3. User Experience (UX) Flows

### **A. The "Dream & Book" Journey (Primary Conversion)**
1.  **Landing (Home)**: User is captivated by a cinematic hero video/image.
    *   *Action*: Clicks "Explore Villas" or uses the Sticky Booking Bar.
2.  **Discovery (Villas Page)**: User filters by category (Luxury, Couple, Log Home).
    *   *Interaction*: Hovers over cards to see price and capacity.
    *   *Decision*: Clicks "View Details" on a specific villa.
3.  **Evaluation (Villa Detail)**: User views high-res gallery, reads amenities list, checks "Similar Villas".
    *   *Action*: Clicks "Book via WhatsApp".
4.  **Conversion (WhatsApp)**: Pre-filled message sends to admin: "Hello, I'd like to book Forest House for [Date]..."

### **B. The "Experience Seeker" Journey**
1.  **Landing**: User scrolls past villas to "Experiences" section.
2.  **Deep Dive (Experiences Page)**: User browses categories (Wellness, Adventure, Culinary).
    *   *Content*: Reads about "Forest Bathing" or "River Dining".
3.  **Inquiry**: User clicks "Plan My Itinerary" -> Direct WhatsApp line to Concierge.

---

## ✍️ 4. Content Strategy & Copywriting

### **Tone of Voice**
- **Sophisticated yet Warm**: Professional but welcoming.
- **Sensory**: Use words that evoke sight, sound, and feeling (e.g., "Whispering pines," "Crisp mountain air," "Warm embrace").
- **Bilingual**: Seamless switching between Indonesian (Formal yet poetic) and English (International standard).

### **Page-by-Page Content Blueprint**

#### **1. Home Page**
- **Hero Headline**: "Claim Your Mountain Sanctuary" / "Kembali ke Alam yang Sesungguhnya"
- **Sub-headline**: "An exclusive escape just 2 hours from Jakarta."
- **Intro Section**: Focus on *heritage* (Nagara Puntang) and *privacy*.
- **Call to Action (CTA)**: "Reserve Your Stay" (Not just "Book").

#### **2. Villas Page**
- **Category Descriptions**:
  - *Luxury Collection*: "Redefined luxury. Butler service, private pools, and uncompromised views."
  - *Log Cabins*: "Rustic charm meets modern comfort. Perfect for families."
  - *Couples Retreat*: "Intimate spaces designed for romance and reconnection."
- **Villa Cards**: Highlight unique selling points (USPs) like "Riverfront," "Private Bonfire," "Sunrise View."

#### **3. Dining (Resto) Page**
- **Headline**: "Farm to Table, Heart to Soul."
- **Menu Descriptions**: Focus on local ingredients. "Organic vegetables harvested from our own garden," "Legendary Puntang Coffee."

#### **4. About Page**
- **Story Arc**:
  1.  The History of Mount Puntang (Radio Malabar).
  2.  The Founding of Bougenville (Passion for nature conservation).
  3.  The Commitment to Sustainability (Eco-friendly practices).

---

## 🛠 5. Technical Architecture

### **Project Structure**
```
src/
├── components/
│   ├── layout/         # Header, Footer, MobileMenu
│   ├── ui/             # Button, Card, Badge, Modal (Atomic Design)
│   └── features/       # BookingForm, VillaCard, ReviewSlider
├── constants/          # content.ts (All text), images.ts (All assets)
├── hooks/              # useScroll, useWindowSize, useTranslation
├── pages/              # HomePage, VillasPage, etc.
└── types/              # TypeScript interfaces
```

### **Key Components Specification**

#### **`VillaCard.tsx`**
- **Props**: `Villa` object, `layout` ('grid' | 'list').
- **Features**:
  - Image carousel on hover (optional).
  - "Quick View" modal trigger.
  - Price formatting helper.

#### **`BookingForm.tsx`**
- **State**: `checkIn`, `checkOut`, `guests`, `villaId`.
- **Logic**:
  - Date picker blocks past dates.
  - Calculates total nights.
  - Generates WhatsApp link: `https://wa.me/...?text=I want to book...`

#### **`Header.tsx`**
- **Behavior**:
  - Transparent at top of page (Hero).
  - Solid White + Shadow on scroll.
  - "Book Now" button appears only on scroll (or always visible on mobile).

---

## 🚀 6. SEO & Performance Strategy

### **SEO Keywords Strategy**
- **Primary**: "Villa Bandung", "Resort Gunung Puntang", "Luxury Glamping Bandung".
- **Secondary**: "Family gathering Bandung", "Honeymoon villa West Java", "Wisata alam Bandung".

### **Meta Tags Structure (per Page)**
- **Title**: `[Page Name] | Taman Wisata Bougenville - Luxury Mountain Resort`
- **Description**: 150-160 characters summary including primary keywords.
  - *Example (Home)*: "Experience luxury in nature at Taman Wisata Bougenville. Private villas, riverfront dining, and pine forest adventures in Mount Puntang, Bandung."

### **Performance Optimization**
- **Images**: Use WebP format, lazy loading (`loading="lazy"`) for below-fold images.
- **Code**: Route-based code splitting (React.lazy).
- **Caching**: Service Worker for offline capabilities (PWA ready).

---

## � 7. Implementation Roadmap

### **Phase 1: Core Experience (MVP)**
- [x] Home Page with Hero & Featured Villas.
- [x] Villas Listing with Categories.
- [x] Villa Detail Page.
- [x] Basic WhatsApp Booking.

### **Phase 2: Content Depth**
- [ ] Experiences/Activity Pages.
- [ ] Dining/Menu Pages.
- [ ] About & History Section.
- [ ] Gallery Grid.

### **Phase 3: Polish & Optimize**
- [ ] Mobile responsiveness fine-tuning.
- [ ] SEO Meta tags implementation.
- [ ] Performance audit (Lighthouse score > 90).
- [ ] Multi-language toggle refinement.
