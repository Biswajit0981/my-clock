# Clock

A React + TypeScript clock app built with Vite and Tailwind CSS. The app includes a digital clock, 12h/24h mode switching, a stopwatch with lap capture, a countdown timer, fullscreen support, and a color palette popover for changing the UI theme.

## Features

- Digital clock with 12-hour and 24-hour modes
- Stopwatch with start, pause, reset, and lap capture
- Countdown timer with configurable minutes
- Color palette with primary and secondary theme updates
- Footer controls for time mode, colors, timer, stopwatch, and fullscreen

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Icons

## Project Structure

```text
clock/
|-- public/
|   |-- clock.svg
|   `-- style.svg
|-- src/
|   |-- components/
|   |   |-- Clock.tsx
|   |   |-- ClockBox.tsx
|   |   |-- ClockContainer.tsx
|   |   |-- ColorPop.tsx
|   |   |-- Footer.tsx
|   |   |-- Mode.tsx
|   |   |-- NumberBox.tsx
|   |   |-- StopWatch.tsx
|   |   |-- TimeLaps.tsx
|   |   |-- Timer.tsx
|   |   `-- TimerPop.tsx
|   |-- context/
|   |   |-- ClockContext.tsx
|   |   `-- ClockProvider.ts
|   |-- hooks/
|   |   `-- index.ts
|   |-- App.tsx
|   |-- index.css
|   `-- main.tsx
|-- package.json
|-- tsconfig.json
`-- vite.config.ts
```

## Main Files

- `src/App.tsx`: renders the main clock layout and footer.
- `src/components/ClockContainer.tsx`: chooses which view to show: clock, stopwatch, or timer.
- `src/components/Footer.tsx`: contains the app controls and opens popovers.
- `src/components/ColorPop.tsx`: color palette buttons that update CSS variables.
- `src/context/ClockContext.tsx`: provides shared app state through React context.
- `src/context/ClockProvider.ts`: defines context types and the `useClockContext` helper.
- `src/index.css`: Tailwind component styles and theme variables.

## Hooks

### `useClock`

Location: `src/hooks/index.ts`

Tracks the current system time and returns formatted clock values.

It reads the `hour` value from context to decide whether to show:

- 12-hour time with `AM` or `PM`
- 24-hour time

Returned data:

```ts
[
  {
    ampm: string,
    hours: string,
    minutes: string
  }
]
```

The hook updates once per second using `setInterval`.

### `useStopWatch`

Location: `src/hooks/index.ts`

Controls stopwatch behavior using `requestAnimationFrame` for smooth elapsed time tracking.

Returned values:

- `minutes`, `seconds`, `milliseconds`: formatted stopwatch display values
- `isRunning`: current running state
- `timeLaps`: captured lap list

Returned actions:

- `startStopWatch()`: starts the stopwatch
- `pauseStopWatch()`: pauses the stopwatch
- `resetStopWatch()`: clears time and laps
- `captureTime()`: stores the current stopwatch time as a lap

### `useTimer`

Location: `src/hooks/index.ts`

Controls the countdown timer. It reads `timerInput` from context, converts it to seconds, and counts down with `setInterval`.

Returned values:

- `hours`, `minutes`, `seconds`: formatted countdown display values
- `inputMinutes`: current timer input from context
- `isRunning`: current timer running state

Returned actions:

- `pauseTimer()`: pauses countdown
- `unPauseTimer()`: resumes countdown
- `resetTimer()`: resets timer back to 5 minutes and closes timer mode

## Theme Colors

The app uses CSS variables in `src/index.css`:

```css
--primary-color
--secondary-color
--clock-number-color
--footer-icon-color
```

`ColorPop` updates these variables when a color button is clicked. White and mint use black text/icons for readability; other colors use white text/icons.

## Run Locally

Install dependencies:

```bash
pnpm install
```

Start the dev server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```
