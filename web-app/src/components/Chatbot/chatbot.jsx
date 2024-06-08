import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Função para inicializar o chatbot
    const initChatbot = () => {
      (function (w, d, s, o, f) {
        w["botsonic_widget"] = o;
        w[o] =
          w[o] ||
          function () {
            (w[o].q = w[o].q || []).push(arguments);
          };
        const js = d.createElement(s);
        const fjs = d.getElementsByTagName(s)[0];
        js.id = o;
        js.src = f;
        js.async = 1;
        fjs.parentNode.insertBefore(js, fjs);
      })(
        window,
        document,
        "script",
        "Botsonic",
        "https://widget.writesonic.com/CDN/botsonic.min.js"
      );
      // eslint-disable-next-line no-undef
      Botsonic("init", {
        serviceBaseUrl: "https://api-azure.botsonic.ai",
        token: "4ffab2d8-23a9-48f4-81db-29b7fdbe2891",
      });
    };

    // Chame a função de inicialização do chatbot
    initChatbot();
  }, []);

  return <div id="botsonic-widget-container"></div>;
};

export default Chatbot;
