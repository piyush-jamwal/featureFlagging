import React from "react";
import { withLDConsumer } from "launchdarkly-react-client-sdk";
function Button({ flags }) {
  console.log("flags", flags);
  return (
    <div>
      {flags.showButton ? (
        <button> feature flagged button!</button>
      ) : (
        "You are not authorized to this feature"
      )}
    </div>
  );
}
export default withLDConsumer()(Button);
