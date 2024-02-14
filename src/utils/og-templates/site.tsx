import { SITE } from "@config";

export default () => {
  return (
    <div
      style={{
        background: "#191c22",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "90%",
          maxHeight: "90%",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <svg
          width="160"
          height="160"
          version="1.1"
          viewBox="0 0 160 160"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            transform="scale(5)"
            d="m6 0c-3.3137 0-6 2.6863-6 6v20c0 3.3137 2.6863 6 6 6h20c3.3137 0 6-2.6863 6-6v-20c0-3.3137-2.6863-6-6-6zm1.996 6h5.4997l-1.4963 15.002h12.999l-0.49897 4.9982h-18.499z"
            fill="#cc3340"
            stroke-width=".90885"
          />
        </svg>
        <p style={{ fontSize: 72, fontWeight: "bold", color: "#f6f7f9" }}>
          {SITE.title}
        </p>
        <p style={{ fontSize: 28, color: "#f6f7f9" }}>{SITE.description}</p>
      </div>
    </div>
  );
};
