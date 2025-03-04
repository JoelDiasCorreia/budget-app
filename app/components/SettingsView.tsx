"use client";

interface SettingItemProps {
  title: string;
  description?: string;
  value?: React.ReactNode;
  onClick?: () => void;
}

const SettingItem: React.FC<SettingItemProps> = ({
  title,
  description,
  value,
  onClick,
}) => {
  return (
    <div
      className="flex justify-between items-center px-4 py-2 bg-white min-h-[72px] max-sm:px-3 max-sm:py-2 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-col gap-1">
        <h3 className="text-base text-neutral-900">{title}</h3>
        {description && <p className="text-sm text-slate-500">{description}</p>}
      </div>
      {value}
    </div>
  );
};

export const SettingsView: React.FC = () => {
  return (
    <main className="flex justify-center px-40 py-5 max-md:px-10 max-md:py-5 max-sm:p-5">
      <div className="max-w-[960px] w-[520px] max-sm:w-full">
        <h1 className="p-4 text-3xl font-bold text-neutral-900">Settings</h1>

        <section className="mb-4">
          <h2 className="px-4 pt-4 pb-2 text-lg font-bold text-neutral-900">
            Preferences
          </h2>
          <SettingItem
            title="Currency"
            description="Set currency to USD"
            value={<span className="text-base text-neutral-900">USD</span>}
          />
        </section>

        <section className="mb-4">
          <h2 className="px-4 pt-4 pb-2 text-lg font-bold text-neutral-900">
            Accounts
          </h2>
          <SettingItem
            title="Add account"
            description="Connect a new bank or card"
            value={
              <div className="flex justify-center items-center w-7">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21 12C21 12.4142 20.6642 12.75 20.25 12.75H12.75V20.25C12.75 20.6642 12.4142 21 12 21C11.5858 21 11.25 20.6642 11.25 20.25V12.75H3.75C3.33579 12.75 3 12.4142 3 12C3 11.5858 3.33579 11.25 3.75 11.25H11.25V3.75C11.25 3.33579 11.5858 3 12 3C12.4142 3 12.75 3.33579 12.75 3.75V11.25H20.25C20.6642 11.25 21 11.5858 21 12Z"
                    fill="#121417"
                  />
                </svg>
              </div>
            }
          />
        </section>

        <section className="mb-4">
          <h2 className="px-4 pt-4 pb-2 text-lg font-bold text-neutral-900">
            Notifications
          </h2>
          <SettingItem
            title="Notifications"
            description="Receive email notifications for important messages"
            value={
              <div className="p-0.5 bg-gray-100 rounded-2xl cursor-pointer h-[31px] w-[51px]">
                <div className="bg-white rounded-xl h-[27px] shadow-[0_3px_8px_rgba(0,0,0,0.15)] w-[27px]" />
              </div>
            }
          />
        </section>

        <section className="mb-4">
          <h2 className="px-4 pt-4 pb-2 text-lg font-bold text-neutral-900">
            Security
          </h2>
          <SettingItem
            title="Change password"
            value={
              <div className="flex justify-center items-center w-7">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.0306 12.5306L9.53063 20.0306C9.23757 20.3237 8.76243 20.3237 8.46937 20.0306C8.17632 19.7376 8.17632 19.2624 8.46937 18.9694L15.4397 12L8.46937 5.03062C8.17632 4.73757 8.17632 4.26243 8.46937 3.96937C8.76243 3.67632 9.23757 3.67632 9.53063 3.96937L17.0306 11.4694C17.1715 11.6101 17.2506 11.8009 17.2506 12C17.2506 12.1991 17.1715 12.3899 17.0306 12.5306Z"
                    fill="#121417"
                  />
                </svg>
              </div>
            }
          />
        </section>
      </div>
    </main>
  );
};
