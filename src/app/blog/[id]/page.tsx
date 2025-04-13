export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  let {id} = await params
    return <h1>Blog Post ID: {id}</h1>;
  }