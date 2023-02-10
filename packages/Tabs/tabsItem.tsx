import React, { FC } from 'react';

export interface TabsItemProps {
    tab: React.ReactNode;
    /** 禁止点击 */
    disabled?: boolean;
    children: React.ReactNode;
}

const TabsItem: FC<TabsItemProps> = ({ children }) => (
    <div className="mzl_tabs_item">{children}</div>
);

export default TabsItem;