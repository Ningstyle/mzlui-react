import React, { CSSProperties } from 'react';

export type MenuProps = {
  menuClick: (e: string | object) => void;
  showMenu?: boolean;
};
function Menu(props: MenuProps): JSX.Element {
  const { menuClick, showMenu } = props;
  return (
    <div>
      {showMenu ? (
        <div className="MenuBoxInner" onClick={() => menuClick('1')}>
          菜单1111
        </div>
      ) : null}
    </div>
  );
}
Menu.defaultProps = {
  showMenu: true,
};
export default React.memo(Menu);
