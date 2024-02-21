import DownloadBtn from "./download-btn";

const DownloadBtnGrid: React.FC = () => {
  return (
    <div className="flex">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div className="max-w-sm">
          <DownloadBtn
            resource="/assets/cv/pedro_martins_pereira_en.pdf"
            message="download (pt-br)"
          />
        </div>
        <div className="max-w-sm">
          <DownloadBtn
            resource="/assets/cv/pedro_martins_pereira_en.pdf"
            message="download (en-us)"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadBtnGrid;
