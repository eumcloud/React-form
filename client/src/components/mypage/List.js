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
  const MajMenu = [
    { mid: 1, lb: "구매정보관리" },
    { mid: 2, lb: "회원정보 관리" }
  ];
  // console.log(MajMenu.mid);
  const AboutBuys = [
    // { mid: 1, label: "구매정보관리", url: "" },
    { mid: 3, lb: "구매내역", url: "/buylist" },
    { mid: 4, lb: "장바구니", url: "/cart" },
    { mid: 5, lb: "1:1문의", url: "/ques" }
  ];
  const AboutUsers = [
    // { mid: 2, label: "회원정보 관리", url: "" },
    { mid: 6, lb: "비밀번호 변경", url: "/buylist" },
    { mid: 7, lb: "배송지관리", url: "/cart" },
    { mid: 8, lb: "결제정보 관리", url: "/ques" }
  ];

  const Justexit = [{ mid: 9, label: "회원탈퇴", url: "/exit" }];

  // const ABlst = AboutBuys.map((mm) => {
  //    (AboutBuys[0]) ?
  //   <TreeItem nodeId={mm[0].mid} lable={mm[0].label}>
  //   :
  //   <TreeItem nodeId={mm.mid} lable={mm.label} />
  // })</TreeItem>;

  const ABlst = (
    <>
      <TreeItem nodeId={MajMenu.mid} label={MajMenu.lb}>
        {AboutBuys.map((mm) => (
          <TreeItem nodeId={mm.mid} label={mm.lb} />
        ))}
      </TreeItem>
    </>
  );
  console.log(ABlst);

  return (
    <Blocksort>
      <TreeView
        className="lnk"
        aria-label="multi-select"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        multiSelect
        // defaultExpanded
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
        {/* {ABlst} */}
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
          <TreeItem nodeId={9} label={"회원탈퇴"} />
        </Link>
      </TreeView>
    </Blocksort>
  );
}
