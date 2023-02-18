import Meta from "../../../components/Meta/Meta";

export default function Head({ params }) {
  return (
    <Meta
      title={`Page ${params.pageNum} - Common`}
      description="The Common Blog shares information related to all Common products. Check back regularly for new updates!"
    />
  );
}
