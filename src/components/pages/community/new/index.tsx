import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import Button from '@/components/ui/button/Button';
import BoardDropdown from '@/components/community/BoardDropdown';

const boards = ['공지사항', '자유게시판', '질문게시판', '취업정보'];

const NewPostPage: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [selectedBoard, setSelectedBoard] = useState<string>('카테고리');

  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => {
    return (newValue?: string) => {
      setter(newValue || '');
    };
  };

  const handleCancel = () => {};

  const handleSubmit = () => {};

  return (
    <div className='flex h-[calc(100vh-64px)] justify-center'>
      <div className='flex w-base flex-col'>
        <div className='mt-[42px]'>
          <BoardDropdown boards={boards} selectedBoard={selectedBoard} onSelectBoard={setSelectedBoard} />
        </div>
        <div className='mt-[10px] flex h-3/4 justify-center'>
          <div className='w-1/2'>
            <div className='title-section h-[44px]'>
              <MDEditor
                textareaProps={{
                  placeholder: '제목을 입력하세요.',
                  maxLength: 30,
                }}
                minHeight={44}
                visibleDragbar={false}
                value={title}
                onChange={handleChange(setTitle)}
                extraCommands={[]}
                hideToolbar={true}
                enableScroll={false}
                preview='edit'
                className='border border-b-0 border-border shadow-none'
              />
            </div>
            <div className='h-[calc(100%-44px)]'>
              <MDEditor
                textareaProps={{
                  placeholder: '내용을 작성하세요.',
                }}
                visibleDragbar={false}
                height='100%'
                value={content}
                onChange={handleChange(setContent)}
                extraCommands={[]}
                preview='edit'
                className='border border-border shadow-none'
              />
            </div>
          </div>
          <div className='border-#ccc h-full w-1/2 rounded-[4px] border border-l-0'>
            <MDEditor.Markdown source={`### ${title}`} className='h-[44px] rounded-t-[3px] px-[20px] py-[20px]' />
            <MDEditor.Markdown
              source={content}
              className='h-[calc(100%-44px)] overflow-auto rounded-b-[3px] px-[20px] py-[10px]'
            />
          </div>
        </div>
        <div className='mt-[32px] flex justify-end'>
          <Button className='mr-[10px]' type='outlined' onClick={handleCancel}>
            취소
          </Button>
          <Button type='filled' onClick={handleSubmit}>
            등록
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewPostPage;
