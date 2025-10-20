import './NotFoundView.scss';

interface NotFoundViewProps {
  title: string;
  message: string;
}

const NotFoundView = ({ title, message }: NotFoundViewProps) => {
  return (
    <div className='not-found'>
      <h2 className='not-found__title'>{title}</h2>
      <p className='not-found__message'>{message}</p>
    </div>
  );
};

export default NotFoundView;
