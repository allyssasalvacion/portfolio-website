export default function Button({ label, style, onClick }) {
  return (
    <button
      type="button"
      className="subtext rounded-md px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-900 active:scale-110"
      style={
        style === "toggle"
          ? styles.toggle
          : style === "link"
          ? styles.link
          : styles.icon
      }
      aria-label={label}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

const styles = {
  toggle: {
    fontSize: 24,
  },

  link: {
    fontSize: 12,
  },

  icon: {
    padding: 12,
  },
};
