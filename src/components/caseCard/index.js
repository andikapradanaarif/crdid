import React from "react";
import { CaseWrapper } from "./style";
import { Card } from "antd";
import { ToPrice } from "../../utils/converter";

const Index = props => {
  return (
    <CaseWrapper className={props.className}>
      <div className={props.isActive && "component_case_card_active"}>
        <Card title={props.title} style={{ width: 300 }} bordered={true}>
          <p className={"component_highlighted"}>
            <strong>{ToPrice(props.highlightedAmount, "")}</strong>
            <span className="container_highlighted_description">
              {props.highlightedDescription}
            </span>
          </p>
          <div className={"component_rows"}>
            <div>
              <p className={"component_highlighted component_highlighted_left"}>
                <span>
                  <strong>{ToPrice(props.leftHighlightedAmount, "")} </strong>
                  (87%)
                </span>
                <br />
                <span className="container_highlighted_description">
                  {props.leftHighlightedDescription}
                </span>
              </p>
            </div>
            <div>
              <p
                className={"component_highlighted component_highlighted_right"}
              >
                <span>
                  <strong>{ToPrice(props.rightHighlightedAmount, "")} </strong>
                  (4%)
                </span>
                <br />
                <span className="container_highlighted_description">
                  {props.rightHighlightedDescription}
                </span>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </CaseWrapper>
  );
};

export default Index;
