import message from '../../../packages/Message';
import Uploader, {
  UploaderProps,
  UploadFile,
} from '../../../packages/Uploader';
import React, { useState } from 'react';

const getBase64 = (img: File, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: UploadFile) => {
  const isJpgOrPng =
    file.originFileObj!.type === 'image/jpeg' ||
    file.originFileObj!.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploaderProps['onChange'] = (file: UploadFile) => {
    if (file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (file.status === 'done') {
      // Get this url from response in real world.
      getBase64(file.originFileObj as File, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div
      style={{
        width: '104px',
        height: '104px',
        marginRight: '8px',
        marginBottom: '8px',
        textAlign: 'center',
        verticalAlign: 'top',
        backgroundColor: '#fafafa',
        border: '1px dashed #d9d9d9',
        borderRadius: '2px',
        cursor: 'pointer',
        transition: 'border-color .3s',
        display: 'flex',
      }}
    >
      <div style={{ margin: 'auto' }}>
        {loading ? (
          <span className="m-icon-loading3" />
        ) : (
          <span className="m-icon-add" />
        )}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    </div>
  );

  return (
    <Uploader
      name="avatar"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      beforeUpload={beforeUpload}
      onChange={handleChange}
      showUploadList={false}
    >
      {imageUrl ? (
        <img src={imageUrl} alt="avatar" style={{ width: '104px' }} />
      ) : (
        uploadButton
      )}
    </Uploader>
  );
};

export default App;
