
const Style = {
    ColorMode: {
        Light: "light.css",
        Dark: "dark.css"
    },
    themeCss: "themeStyle",
    SetTheme: function (style){
        document.getElementById(Style.themeCss).href = style;
    }
}

// https://stackoverflow.com/questions/56393880/how-do-i-detect-dark-mode-using-javascript
Style.SetTheme(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? Style.ColorMode.Dark : Style.ColorMode.Light);