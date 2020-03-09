import React from "react";
import { CaseWrapper } from "./style";
import { Card } from "antd";
import { ToPrice } from "../../utils/converter";

const Index = props => {
  return (
    <CaseWrapper className={props.className}>
      <Card title={props.title} style={{ width: 300 }} bordered={true}>
        <p className={"component_highlighted"}>
          <strong>{ToPrice(props.highlightedAmount, "")}</strong>
          <p className="container_highlighted_description">
            {props.highlightedDescription}
          </p>
        </p>
        <div className={"component_rows"}>
          <div>
            <p className={"component_highlighted"}>
              <strong>{ToPrice(props.highlightedAmount, "")}</strong>
              <p className="container_highlighted_description">
                {props.highlightedDescription}
              </p>
            </p>
          </div>
          <div>
            <p className={"component_highlighted"}>
              <strong>{ToPrice(props.highlightedAmount, "")}</strong>
              <p className="container_highlighted_description">
                {props.highlightedDescription}
              </p>
            </p>
          </div>
        </div>
      </Card>
    </CaseWrapper>
  );
};

export default Index;
