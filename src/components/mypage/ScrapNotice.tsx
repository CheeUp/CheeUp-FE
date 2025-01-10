import React, { useState } from 'react';
import Dropdown from '@/components/ui/dropdown/Dropdown';
import SearchBar from '../ui/searchbar/SearchBar';
import { MRecruitDetail } from '@/mocks/data/recruit';
import { TRecruitNotice } from '@/model/recruit';

const TABLE_CELL_CLASSNAME = 'px-4 py-2';

const ScrapNotice: React.FC = () => {
    const [selectedStatus, setSelectedStatus] = useState<string>('모집중');

    const getStatus = (startDate: Date, endDate: Date): string => {
        const now = new Date();
        if (now < startDate) return '모집예정';
        if (now >= startDate && now <= endDate) return '모집중';
        return '모집완료';
    };

    
    const filteredData: TRecruitNotice[] = MRecruitDetail.filter((recruit) => {
        const status = getStatus(recruit.startDate, recruit.endDate);
        return recruit.isScraped && status === selectedStatus;
    }).map((recruit) => ({
        id: recruit.id,
        company: recruit.company,
        startDate: recruit.startDate,
        endDate: recruit.endDate,
        title: recruit.title,
        url: recruit.url,
        isScraped: recruit.isScraped,
    }));

    return (
        <div>
            <div>
                <h2 className='mb-4 text-2xl font-bold'>스크랩한 공고</h2>
            </div>
            <div className='border bg-white p-4'>
                {/* 검색 및 필터링 */}
                <div className='mb-4 flex gap-4'>
                    <div className='w-3/4'>
                        <SearchBar
                            value=''
                            onChange={(e) => { }}
                            onSearch={() => { }}
                            placeholder='스크랩한 공고를 입력하세요'
                            className='mt-2 rounded-sm border border-blue-300 px-4 py-2 focus-within:ring-2 focus-within:ring-blue-400'
                        />
                    </div>
                    <div className='w-1/4'>
                        <Dropdown
                            placeholder='모집 상태 선택'
                            options={['모집중', '모집완료', '모집예정']}
                            selected={selectedStatus}
                            setSelected={setSelectedStatus}
                            className='flex w-full items-center gap-2 rounded-sm border border-blue-300  mt-2 px-4 py-0.5 focus:outline-activate'
                        />
                    </div>
                </div>
                <h3 className='mb-4 text-2xl font-bold'>{selectedStatus}</h3>
                {/* 필터링된 데이터 테이블 */}
                <div className='overflow-hidden rounded-sm border border-gray-300'>
                    <table className='w-full border-collapse rounded-sm border border-gray-300'>
                        <thead>
                            <tr className='bg-gray-100 divide-x divide-gray-300'>
                                <th className={TABLE_CELL_CLASSNAME}>공고명</th>
                                <th className={TABLE_CELL_CLASSNAME}>기업명</th>
                                <th className={TABLE_CELL_CLASSNAME}>시작 날짜</th>
                                <th className={TABLE_CELL_CLASSNAME}>종료 날짜</th>
                                <th className={TABLE_CELL_CLASSNAME}>채용 사이트 링크</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((recruit) => (
                                <tr key={recruit.id} className='text-center divide-x divide-gray-300'>
                                    <td className={TABLE_CELL_CLASSNAME}>{recruit.title}</td>
                                    <td className={TABLE_CELL_CLASSNAME}>{recruit.company}</td>
                                    <td className={TABLE_CELL_CLASSNAME}>{recruit.startDate.toLocaleDateString()}</td>
                                    <td className={TABLE_CELL_CLASSNAME}>{recruit.endDate.toLocaleDateString()}</td>
                                    <td className={TABLE_CELL_CLASSNAME}>
                                        <a
                                            href={recruit.url}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='text-blue-500 underline hover:underline'
                                        >
                                            링크 이동
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ScrapNotice;
