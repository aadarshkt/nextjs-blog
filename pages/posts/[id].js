import Layout from "../../components/layout";
import {
  getAllPostIds,
  getPostData,
} from "../../lib/posts";

//get data to fill
export async function getStaticProps({
  params,
}) {
  const postData = getPostData(
    params.id
  );
  return {
    props: {
      postData,
    },
  };
}

//get all paths for [id]
//also register the paths to next js framework such that when user goes to
//a certain path, you have the page  with populated data.
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({
  postData,
}) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}
