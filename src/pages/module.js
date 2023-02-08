import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult, ModuleDetail } from "../components";

const GET_PARENT_TRACK_AND_MODULE = gql`
  query GetParentTrackAndModule($moduleId: ID!, $trackId: ID!) {
    track(id: $trackId) {
      id
      title
      modules {
        length
        title
        id
      }
    }
    module(id: $moduleId) {
      id
      title
      videoUrl
      content
    }
  }
`;

const Module = ({ trackId, moduleId }) => {
  const { loading, error, data } = useQuery(GET_PARENT_TRACK_AND_MODULE, {
    variables: {
      trackId,
      moduleId,
    },
  });
  return (
    <Layout fullWidth>
      <QueryResult loading={loading} error={error} data={data}>
        <ModuleDetail {...data} />
      </QueryResult>
    </Layout>
  );
};

export default Module;
