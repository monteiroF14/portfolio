export function getCardColor(language: string): string {
  const availableLanguages: { [key: string]: string } = {
    Javascript: "#F0DB4F",
    Java: "#B07219",
    Python: "#3776AB",
    C: "#555555",
    PHP: "#777BB4",
    TypeScript: "#0074C1",
    Sass: "#A53B70",
  };

  return availableLanguages[language] || "#303030";
}
