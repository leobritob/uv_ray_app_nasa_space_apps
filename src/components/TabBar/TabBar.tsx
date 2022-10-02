import classNames from 'classnames';
import { MdHomeFilled, MdLocationPin, MdInfo } from 'react-icons/md';

type TabBarProps = {
  selectedIndex?: number;
};

const DEFAULT_COLOR = 'rgba(144,97,249,1)';

export function TabBar({ selectedIndex = 1 }: TabBarProps) {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 p-10">
      <div className="w-full lg:w-[500px] m-auto bg-white p-4 rounded-3xl shadow-2xl">
        <div className="w-full max-w-sm m-auto flex items-center justify-between">
          <TabBarItem>
            <MdHomeFilled
              fontSize="28px"
              fill={selectedIndex === 0 ? '#fff' : DEFAULT_COLOR}
            />
          </TabBarItem>
          <TabBarItem isSelected>
            <MdLocationPin
              fontSize="28px"
              fill={selectedIndex === 1 ? '#fff' : DEFAULT_COLOR}
            />
          </TabBarItem>
          <TabBarItem>
            <MdInfo
              fontSize="28px"
              fill={selectedIndex === 2 ? '#fff' : DEFAULT_COLOR}
            />
          </TabBarItem>
        </div>
      </div>
    </div>
  );
}

type TabBarItemProps = {
  isSelected?: boolean;
  children: React.ReactNode;
};

function TabBarItem({ isSelected = false, children }: TabBarItemProps) {
  return (
    <button
      className={classNames(
        'w-[80px] h-[80px] rounded-[80px] shadow-lg flex items-center justify-center transition-colors hover:bg-purple-500/25',
        { 'bg-purple-500 hover:bg-purple-600': isSelected }
      )}
    >
      {children}
    </button>
  );
}
