import { FSCMoodletGroup } from '@/components/FSCMoodletGroup';
import { MoodletButton } from '@/components/MoodletButton';
import { LogoIcon } from '@/assets/LogoIcon';

function App() {

  return (
    <>
      <div className="flex items-center h-lvh">
        <div className='w-3xl m-auto'>
          <h1 className="mt-4 text-3xl font-bold text-gray-800 mb-4 text-center">Task</h1>

          <div className="my-24 flex flex-col gap-4 items-center justify-center">
            <FSCMoodletGroup />
          </div>

          <div className="mt-36 p-6 bg-gray-50">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Showcase Moodlet</h1>

            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Content options</h2>
              <div className="flex space-x-8 items-center">
                <div className="flex flex-col items-center">
                  <span className="text-gray-600 mb-2">Letter</span>
                  <MoodletButton displayMode="letter" content="P" variant="primary" isReadOnly />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-gray-600 mb-2">Icon</span>
                  <MoodletButton displayMode="icon" icon={<LogoIcon className="w-[20px] h-[20px]" />} variant="primary" isReadOnly />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-gray-600 mb-2">Ellipsis</span>
                  <MoodletButton displayMode="ellipsis" variant="primary" isReadOnly />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-gray-600 mb-2">Word</span>
                  <MoodletButton displayMode="word" content="LOR" variant="primary" isReadOnly />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-gray-600 mb-2">Icon L</span>
                  <MoodletButton displayMode="iconL" content="LOR" icon={<LogoIcon className="w-[20px] h-[20px]" />} variant="primary" isReadOnly />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-gray-600 mb-2">Icon R</span>
                  <MoodletButton displayMode="iconR" content="LOR" icon={<LogoIcon className="w-[20px] h-[20px]" />} variant="primary" isReadOnly />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Style variants</h2>
              <div className="grid grid-cols-3 gap-4">
                {/* Header row */}
                <div className="text-gray-600 font-medium">Button Type</div>
                <div className="text-center text-gray-600 font-medium">Read only</div>
                <div className="text-center text-gray-600 font-medium">Interaction possible</div>

                {/* Primary | Active */}
                <div className="text-gray-600">Primary | Active</div>
                <div className="flex justify-center">
                  <MoodletButton displayMode="iconR" content="LOR" icon={<LogoIcon className="w-[20px] h-[20px]" />} variant="primary" isReadOnly />
                </div>
                <div className="flex justify-center">
                  <MoodletButton displayMode="iconR" content="LOR" icon={<LogoIcon className="w-[20px] h-[20px]" />} variant="primary" />
                </div>

                {/* Inactive */}
                <div className="text-gray-600">Inactive</div>
                <div className="flex justify-center">
                  <MoodletButton displayMode="iconR" content="LOR" icon={<LogoIcon className="w-[20px] h-[20px]" />} variant="inactive" isReadOnly />
                </div>
                <div className="flex justify-center">
                  <MoodletButton displayMode="iconR" content="LOR" icon={<LogoIcon className="w-[20px] h-[20px]" />} variant="inactive" />
                </div>

                {/* Secondary | Planning */}
                <div className="text-gray-600">Secondary | Planning</div>
                <div className="flex justify-center">
                  <MoodletButton displayMode="iconR" content="LOR" icon={<LogoIcon className="w-[20px] h-[20px]" />} variant="secondary" isReadOnly />
                </div>
                <div className="flex justify-center">
                  <MoodletButton displayMode="iconR" content="LOR" icon={<LogoIcon className="w-[20px] h-[20px]" />} variant="secondary" />
                </div>

                {/* Blue | Released */}
                <div className="text-gray-600">Blue | Released</div>
                <div className="flex justify-center">
                  <MoodletButton displayMode="iconR" content="LOR" icon={<LogoIcon className="w-[20px] h-[20px]" />} variant="blue" isReadOnly />
                </div>
                <div className="flex justify-center">
                  <MoodletButton displayMode="iconR" content="LOR" icon={<LogoIcon className="w-[20px] h-[20px]" />} variant="blue" />
                </div>

                {/* Green | OK */}
                <div className="text-gray-600">Green | OK</div>
                <div className="flex justify-center">
                  <MoodletButton displayMode="iconR" content="LOR" icon={<LogoIcon className="w-[20px] h-[20px]" />} variant="green" isReadOnly />
                </div>
                <div className="flex justify-center">
                  <MoodletButton displayMode="iconR" content="LOR" icon={<LogoIcon className="w-[20px] h-[20px]" />} variant="green" />
                </div>

                {/* Red | Stop/Block */}
                <div className="text-gray-600">Red | Stop/Block</div>
                <div className="flex justify-center">
                  <MoodletButton displayMode="iconR" content="LOR" icon={<LogoIcon className="w-[20px] h-[20px]" />} variant="red" isReadOnly />
                </div>
                <div className="flex justify-center">
                  <MoodletButton displayMode="iconR" content="LOR" icon={<LogoIcon className="w-[20px] h-[20px]" />} variant="red" />
                </div>

                {/* Yellow | Warning */}
                <div className="text-gray-600">Yellow | Warning</div>
                <div className="flex justify-center">
                  <MoodletButton displayMode="iconR" content="LOR" icon={<LogoIcon className="w-[20px] h-[20px]" />} variant="yellow" isReadOnly />
                </div>
                <div className="flex justify-center">
                  <MoodletButton displayMode="iconR" content="LOR" icon={<LogoIcon className="w-[20px] h-[20px]" />} variant="yellow" />
                </div>

                {/* Divider */}
                <div className="col-span-3 border-t border-gray-200 my-2"></div>

                {/* Disabled */}
                <div className="text-gray-600">Disabled</div>
                <div className="flex justify-center">
                  <MoodletButton displayMode="iconR" content="LOR" icon={<LogoIcon className="w-[20px] h-[20px]" />} disabled={true} isReadOnly />
                </div>

                <div></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App