export async function initMsw() {
  if (typeof window !== "undefined") {
    const { worker } = await import("../mocks/browser");
    await worker.start();
  }
}
