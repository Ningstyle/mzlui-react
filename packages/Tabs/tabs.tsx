import React, { FC, FunctionComponentElement, MouseEvent, useState } from 'react';
import classNames from 'classnames';
import TabsItem from './TabsItem';
import { TabsItemProps } from './TabsItem';
import './style.scss';

/** 卡片和线 */
export type TabsType = 'line' | 'card';

export interface TabsProps {
    className?: string;
    /** 默认显示的tab页 */
    defaultActiveKey?: number;
    type?: TabsType;
    /** 点击tab页时的回调 */
    onTabClick?: (selectedKey: number) => void;
    children: React.ReactNode;
}

const RootTab: FC<TabsProps> = ({
    className,
    defaultActiveKey,
    type,
    onTabClick,
    children,
    ...restProps
}) => {
    /** 
     * 当前选择的tabs页签key值
    */
    const [activeKey, setActiveKey] = useState(defaultActiveKey);
    const tabsClassName = classNames('mzl_tabs', {
        [`${className}`]: className
    })
    const classes = classNames('mzl_tabs_nav', {
        'nav_line': type === 'line',
        'nav_card': type === 'card',
    });

    /** 
     * 点击切换tabs页签时的回调
    */
    const handleClick = (e: MouseEvent, index: number, disabled: boolean | undefined) => {
        if (!disabled) {
            setActiveKey(index);
            onTabClick && onTabClick(index);
        }
    };

    /** 
     * 点击切换tabs页签时的回调
    */
    const renderNavLinks = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as FunctionComponentElement<TabsItemProps>;
            const { tab, disabled } = childElement.props;
            const classes = classNames('mzl_tabs_nav_item', {
                'is_active': activeKey === index,
                disabled,
            });

            return (
                <li
                    className={classes}
                    /* eslint-disable-next-line react/no-array-index-key */
                    key={`nav_item_${index}`}
                    onClick={(e) => {
                        handleClick(e, index, disabled);
                    }}
                >
                    {tab}
                </li>
            );
        });
    }

    /** 
     * 根据activeKey获取对应的内容
    */
    const renderContent = () => {
        return React.Children.map(children, (child, index) => {
            if (index === activeKey) {
                return child;
            }
        });
    }

    return (
        <div className={tabsClassName} {...restProps}>
            {/* tabs的导航栏 */}
            <ul className={classes}>{renderNavLinks()}</ul>
            {/* tabs的内容区域 */}
            <div className="mzl_tabs_content">{renderContent()}</div>
        </div>
    );
};

RootTab.defaultProps = {
    defaultActiveKey: 0,
    type: 'line',
};

export type ITabComponent = FC<TabsProps> & {
    TabsItem: FC<TabsItemProps>;
};

const Tabs = RootTab as ITabComponent;
Tabs.TabsItem = TabsItem;

export default Tabs;