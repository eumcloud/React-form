import * as React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Blocksort = styled.div`
  width: 100%;
  margin: 5% auto;
  /* .Link {
    color: "inherit";
  } */
  .lnk {
    a, a:hover, a:visited{text-decoration:none; color:inherit}
    color: "black";
    textdecoration: "inherit";
  }
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
          <Link to="buylist">
          <TreeItem nodeId="2" label="구매내역" component={Link} to={"/buylist"} /></Link>
          <Link to="cart">
          <TreeItem nodeId="3" label="장바구니" component={Link} to={"/mypage/cart"} />
          </Link>
          <Link to="queslist">
          <TreeItem nodeId="4" label="1:1문의" component={Link} to={"/queslist"} />
          </Link>
        </TreeItem>

        <TreeItem nodeId="5" label="회원정보 관리">
          <Link to="passchange" className="lnk">
            <TreeItem nodeId="6" label="비밀번호 변경" />
          </Link>
          <Link to="shipaddr" className="lnk">
          <TreeItem nodeId="7" label="배송지관리" component={Link} to={"/shipaddr"} /></Link>
          <Link to="payinfo" className="lnk">
          <TreeItem nodeId="8" label="결제정보관리" component={Link} to={"/payinfo"}/></Link>
        </TreeItem>
        <Link to="secession" className="lnk">
		  <TreeItem nodeId="19" label="회원탈퇴" component={Link} to={"/secession"} /></Link>
        
      </TreeView>
    </Blocksort>
  );
}
