export default function Head({ params }) {
  return (
    <>
      <title>{`Page ${params.pageNum} - Common`}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="The Common Blog shares information related to all Common products. Check back regularly for new updates!"
      />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
