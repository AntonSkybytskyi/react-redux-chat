import styled from 'styled-components';

interface SidebarProps {
  slide?: boolean;
  open?: boolean;
}

const Sidebar = styled.div<SidebarProps>`
  flex: 1;
  @media all and (max-width: 950px) {
    flex: 0 0 100px;
  }
`;

export default Sidebar;
