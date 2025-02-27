import React, { Suspense } from "react";
import { Layout } from "shared/Layout";

// 원격 앱들을 lazy로 불러옵니다
const App1 = React.lazy(() => import("app1/App"));
const App2 = React.lazy(() => import("app2/App"));

const App = () => {
  return (
    <Layout>
      <div style={{ padding: "20px" }}>
        <h1>Host Application</h1>

        <div
          style={{
            marginBottom: "20px",
            padding: "20px",
            border: "1px solid #ccc",
          }}
        >
          <h2>App 1</h2>
          <Suspense fallback={<div>Loading App1...</div>}>
            <App1 />
          </Suspense>
        </div>

        <div style={{ padding: "20px", border: "1px solid #ccc" }}>
          <h2>App 2</h2>
          <Suspense fallback={<div>Loading App2...</div>}>
            <App2 />
          </Suspense>
        </div>
      </div>
    </Layout>
  );
};

export default App;
