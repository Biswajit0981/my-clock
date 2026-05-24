
const colors = [
    {name: "Black", value: "#000000"},
    {name: "White", value: "#ffffff"},
    {name: "Mint", value: "#ecffd9"},
    {name: "Pink", value: "#ffd2e0"},
    {name: "Ice blue", value: "#dcf8ff"},
    {name: "Cream", value: "#fff7ec"},
    {name: "Peach", value: "#ffcdbb"},
    {name: "Lavender", value: "#e9c7ff"},
    {name: "Butter", value: "#ffedc6"},
];

const getReadableColor = (hex: string) => {
    const red = parseInt(hex.slice(1, 3), 16);
    const green = parseInt(hex.slice(3, 5), 16);
    const blue = parseInt(hex.slice(5, 7), 16);
    const brightness = (red * 299 + green * 587 + blue * 114) / 1000;

    return brightness > 160 ? "#000000" : "#ffffff";
};

const shiftColor = (hex: string, amount: number) => {
    const channels = [1, 3, 5].map((start) => {
        const value = parseInt(hex.slice(start, start + 2), 16);
        const shifted = Math.max(0, Math.min(255, value + amount));

        return shifted.toString(16).padStart(2, "0");
    });

    return `#${channels.join("")}`;
};

const getSecondaryColor = (hex: string) => {
    return getReadableColor(hex) === "#ffffff" ? shiftColor(hex, 18) : shiftColor(hex, -18);
};

const ColorPop = () => {
    const setClockColor = (color: string) => {
        const secondaryColor = getSecondaryColor(color);
        const foregroundColor = color === "#ffffff" || color === "#ecffd9" ? "#000000" : "#ffffff";

        document.documentElement.style.setProperty("--primary-color", color);
        document.documentElement.style.setProperty("--secondary-color", secondaryColor);
        document.documentElement.style.setProperty("--clock-number-color", foregroundColor);
        document.documentElement.style.setProperty("--footer-icon-color", foregroundColor);
    };

    return (
        <div className="color_pop" role="dialog" aria-label="Color palette">
            {colors.map((color) => (
                <button
                    aria-label={`Set color to ${color.name}`}
                    className="color_swatch"
                    key={color.value}
                    onClick={() => setClockColor(color.value)}
                    style={{backgroundColor: color.value}}
                    type="button"
                />
            ))}
        </div>
    )
}
export default ColorPop
