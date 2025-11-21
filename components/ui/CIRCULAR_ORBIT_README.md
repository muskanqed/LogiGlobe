# CircularOrbit Component

A production-ready React component that positions feature cards in a perfect circular ring around a central element using trigonometric calculations and Framer Motion animations.

## Features

- ✅ **Perfect Circular Positioning**: Uses cos/sin for mathematically precise placement
- ✅ **No Overlap Guarantee**: Automatically ensures cards stay outside the central element
- ✅ **Staggered Animations**: Each card animates with a unique delay for visual appeal
- ✅ **Floating Effect**: Smooth 10px up-down motion on infinite loop
- ✅ **Fully Responsive**: Configurable radius and sizing
- ✅ **TypeScript**: Full type safety with proper interfaces
- ✅ **Accessible**: Semantic HTML and proper ARIA attributes

## Installation

```bash
npm install framer-motion
```

## Basic Usage

```tsx
import { CircularOrbit } from "@/components/ui/circular-orbit"
import { type FeatureCard } from "@/types/feature-card"

const cards: FeatureCard[] = [
  {
    id: "1",
    title: "Fast",
    icon: "⚡",
    description: "Lightning speed",
    gradient: { from: "yellow-100", to: "yellow-200" },
  },
  // ... more cards
]

export function MyComponent() {
  return (
    <div className="w-full h-[600px]">
      <CircularOrbit cards={cards} radius={280} globeRadius={200}>
        <YourCentralElement />
      </CircularOrbit>
    </div>
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `cards` | `FeatureCard[]` | **required** | Array of card objects to display |
| `radius` | `number` | `280` | Distance from center to cards (in pixels) |
| `globeRadius` | `number` | `200` | Radius of central element (ensures no overlap) |
| `children` | `React.ReactNode` | **required** | Central element (globe, logo, etc.) |
| `className` | `string` | `""` | Additional CSS classes for container |

## FeatureCard Type

```typescript
interface FeatureCard {
  id: string
  title: string
  subtitle?: string
  description: string
  icon: string
  gradient: {
    from: string  // e.g., "yellow-100"
    to: string    // e.g., "yellow-200"
  }
}
```

## Customization

### Adjusting Card Count

The component automatically distributes cards evenly:
- 4 cards = 90° apart
- 6 cards = 60° apart
- 8 cards = 45° apart

### Modifying Animation

Edit the transition object in `circular-orbit.tsx`:

```tsx
transition={{
  y: {
    duration: 2.5,        // Speed of floating
    delay: index * 0.15,  // Stagger delay
    repeat: Infinity,
    ease: "easeInOut",
  },
}}
```

### Custom Gradients

Add new gradient combinations to the `gradientMap`:

```tsx
const gradientMap: Record<string, string> = {
  "red-100_red-200": "bg-gradient-to-br from-red-100 to-red-200",
  // ... add more
}
```

### Responsive Sizing

```tsx
<div className="h-[400px] sm:h-[500px] lg:h-[600px]">
  <CircularOrbit
    cards={cards}
    radius={windowWidth > 1024 ? 280 : 200}
  >
    <Globe />
  </CircularOrbit>
</div>
```

## Math Explained

### Circular Positioning Formula

For N cards evenly distributed:

```
angle = (cardIndex / totalCards) × 2π - π/2

x = centerX + radius × cos(angle)
y = centerY + radius × sin(angle)
```

- Start at `-π/2` (top of circle, -90°)
- Each card is separated by `2π / N` radians
- `cos(angle)` gives horizontal position
- `sin(angle)` gives vertical position

### Safe Radius Calculation

```tsx
const safeRadius = Math.max(radius, globeRadius + 80)
```

Ensures minimum 80px clearance between globe edge and card edge.

## Animation Timeline

1. **Initial (0s)**: Cards are hidden (`opacity: 0, scale: 0.8`)
2. **Staggered Entry**: Each card fades in with `index × 0.15s` delay
3. **Continuous Float**: Infinite 10px up-down motion starts immediately
4. **Hover**: Scale increases to 105% with shadow enhancement

## Performance Notes

- Uses Framer Motion's optimized animation engine
- GPU-accelerated transforms (x, y, scale)
- No layout thrashing or reflows
- Animations run on compositor thread

## Browser Support

- Modern browsers with CSS Grid and Flexbox
- Framer Motion requires React 18+
- Tailwind CSS v3+ for styling

## Troubleshooting

### Cards overlap the globe
- Increase `radius` prop
- Decrease `globeRadius` prop
- Check container has sufficient height

### Cards not animating
- Verify `framer-motion` is installed
- Check browser console for errors
- Ensure parent has defined height

### Gradient colors not working
- Add gradient combination to `gradientMap`
- Use exact Tailwind color names
- Template literals don't work with Tailwind

## Examples

See `/components/examples/circular-orbit-demo.tsx` for a complete standalone demo.

## License

MIT
