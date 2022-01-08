import * as React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import styled from "styled-components";
import { MaterialUiComponent, Link } from "@mui/material";
// import { Link } from "react-router-dom";

const Blocksort = styled.div`
  width: 100%;
  margin: 5% auto;
  /* .Link {
    color: "inherit";
  } */
  /* .lnk {
    color: "inherit";
    textdecoration: "inherit";
  } */
`;
// const LinkBlock = styled.Link`
//   color: "inherit";
// `;

// const LinkBehavior = React.forwardRef((props, ref) => (
//   <RouterLink ref={ref} to="/getting-started/installation/" {...props} />
// ));
export default function MultiSelectTreeView() {
  return (
    <Blocksort>
      <TreeView
        className="lnk"
        aria-label="multi-select"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        multiSelect
        sx={{
          fontSize: "h3.fontSize",
          m: 1,
          height: 568,
          flexGrow: 1,
          overflow: "hidden",
          color: "inherit",
          textDecoration: "inherit"
        }}
      >
        <TreeItem nodeId="1" label="구매정보관리">
          <TreeItem nodeId="2" label="구매내역" />
          <TreeItem nodeId="3" label="장바구니" />
          <TreeItem nodeId="4" label="1:1문의" />
        </TreeItem>

        <TreeItem nodeId="5" label="회원정보 관리">
          <Link to="/abc" className="lnk">
            <TreeItem nodeId="6" label="비밀번호 변경"></TreeItem>
          </Link>
          <TreeItem nodeId="7" label="배송지관리" className="lnk" />
          <TreeItem nodeId="8" label="결제정보관리" className="lnk"></TreeItem>
        </TreeItem>
        <Link
          to="/abc"
          /*sx={{ color: "inherit", textDecoration: "none" }} */ className="lnk"
        >
          <TreeItem nodeId="19" label="회원탈퇴" />
        </Link>
      </TreeView>
    </Blocksort>
  );
}
