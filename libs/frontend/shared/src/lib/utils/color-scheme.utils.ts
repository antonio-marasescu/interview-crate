const ThemeKey = 'theme';
const DarkMode = 'dark';
const LightMode = 'dark';

export function detectColorScheme(): void {
    if (
        localStorage.getItem(ThemeKey) === DarkMode ||
        (!(ThemeKey in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        document.documentElement.classList.add(DarkMode);
    } else {
        document.documentElement.classList.remove(DarkMode);
    }
}

export function toggleLightMode(): void {
    localStorage.setItem(ThemeKey, LightMode);
}

export function toggleDarkMode(): void {
    localStorage.setItem(ThemeKey, DarkMode);
}

export function toggleOSPreferenceMode(): void {
    localStorage.removeItem(ThemeKey);
}
