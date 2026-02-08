# @expo/ui Section Footer Bug Reproduction

This is a minimal reproduction for a bug in `@expo/ui` where the `footer` prop on `Section` components is ignored when
using the `title` prop.

## Bug Description

When using `@expo/ui/swift-ui`'s `Section` component with both a `title` prop and a `footer` prop, the footer is not
rendered.

![Screenshot showing missing footer](./expo-ui-section-footer-bug.png)

## How to Reproduce

**Note:** `@expo/ui` requires a development build and is not available in Expo Go.

1. Install dependencies: `bun install`
2. Build and run on iOS: `bun ios` (this creates a development build)
3. Observe that:
    - The first section ("Using title prop") does NOT show its footer text
    - The second section ("Using header prop") DOES show its footer text

## Expected Behavior

Both sections should display their footer text.

## Workaround

Use the `header` prop with a `Text` element instead of the `title` prop:

```tsx
// Instead of:
<Section title="My Title" footer={<Text>Footer</Text>}>

  // Use:
  <Section header={<Text>My Title</Text>} footer={<Text>Footer</Text>}>
```

## Environment

- `@expo/ui`: ~55.0.0-preview.4
- Platform: iOS
