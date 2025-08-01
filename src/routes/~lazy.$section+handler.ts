const sleep = (duration: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, duration);
  });

export const GET = [
  async (context) => {
    const { section } = context.params;

    await sleep(500);

    if (section === "10") {
      return new Response(null, {
        status: 400,
      });
    }
  },
] as MarkoRun.Handler;
