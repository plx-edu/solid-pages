// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
import AppLayout from "./components/AppLayout";

export default function Root() {
  return (
    <Html lang="en" class="">
      <Head>
        <Title>:: Solid Pages ::</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body class="absolute top-0 bottom-0 left-0 right-0">
        <Suspense>
          <ErrorBoundary>
            <AppLayout>
              <Routes>
                <FileRoutes />
              </Routes>
            </AppLayout>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
