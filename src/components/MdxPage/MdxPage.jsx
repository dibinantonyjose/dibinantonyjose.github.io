import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./MdxPage.css";

function MdxPage() {
  const { pathname } = useLocation();
  const [type, filename] = pathname.split("/").filter(Boolean);
  const [Component, setComponent] = useState(null);
  const [metaData, setMetaData] = useState({});

  useEffect(() => {
    const loadContent = async () => {
      const module = await import(`../../assets/${type}/${filename}.mdx`);
      setComponent(() => module.default);
      setMetaData(module.metaData);
    };
    loadContent();
  }, [filename, type]);

  useEffect(() => {
    if (Component) {
      Prism.highlightAll();
    }
  }, [Component]);

  if (!Component) {
    return <div>Loading...</div>; // Don't render Component if it's null
  }

  return (
    <section className="mdx-page">
      <p>{metaData.date}</p>
      <Component />
    </section>
  );
}

export default MdxPage;
