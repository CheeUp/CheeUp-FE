import React, { useState } from 'react';
import Dropdown from '@/components/ui/dropdown/Dropdown';
import SearchBar from '../ui/searchbar/SearchBar';
import { MRecruitPreview } from '@/mocks/data/recruit';

const getStatus = (startDate: Date, endDate: Date): string => {
    const now = new Date();
    if (now < startDate) return '모집예정';
    if (now >= startDate && now <= endDate) return '모집중';
    return '모집완료';
};

const ScrapNotice: React.FC = () => {
    const [selectedStatus, setSelectedStatus] = useState<string>('모집중');

    interface Recruit {
        id: number;
        company: string;
        startDate: Date;
        endDate: Date;
        isScraped: boolean;
    }

    const filteredData: Recruit[] = MRecruitPreview.filter((recruit: Recruit) => {
        const status = getStatus(recruit.startDate, recruit.endDate);
        return recruit.isScraped && status === selectedStatus;
    });

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
                            className='mt-2 rounded-md border border-blue-300 px-4 py-2 focus-within:ring-2 focus-within:ring-blue-400'
                        />
                    </div>
                    <div className='w-1/4'>
                        <Dropdown
                            placeholder='모집 상태 선택'
                            options={['모집중', '모집완료', '모집예정']}
                            selected={selectedStatus}
                            setSelected={setSelectedStatus}
                        />
                    </div>
                </div>
                <h3 className='mb-4 text-2xl font-bold'>{selectedStatus}</h3>
                {/* 필터링된 데이터 테이블 */}
                <div className='overflow-hidden rounded-sm border border-gray-300'>
                    <table className='w-full border-collapse rounded-sm border border-gray-300'>
                        <thead>
                            <tr className='bg-gray-100'>
                                <th className='border border-gray-300 px-4 py-2'>공고명</th>
                                <th className='border border-gray-300 px-4 py-2'>기업명</th>
                                <th className='border border-gray-300 px-4 py-2'>시작 날짜</th>
                                <th className='border border-gray-300 px-4 py-2'>종료 날짜</th>
                                <th className='border border-gray-300 px-4 py-2'>상태</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((recruit) => (
                                <tr key={recruit.id} className='text-center'>
                                    <td className='border border-gray-300 px-4 py-2'>2024년 하반기 {recruit.company} 채용</td>
                                    <td className='border border-gray-300 px-4 py-2'>{recruit.company}</td>
                                    <td className='border border-gray-300 px-4 py-2'>{recruit.startDate.toLocaleDateString()}</td>
                                    <td className='border border-gray-300 px-4 py-2'>{recruit.endDate.toLocaleDateString()}</td>
                                    <td className='border border-gray-300 px-4 py-2'>{getStatus(recruit.startDate, recruit.endDate)}</td>
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
