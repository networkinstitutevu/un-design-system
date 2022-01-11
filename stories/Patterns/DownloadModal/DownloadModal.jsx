import React, { useEffect } from 'react';
import './downloadmodal.scss';
import { Publicationthumb } from '../../Atom/Cards/Publication-thumbnail/PublicationThumbnail';
import { DownloadRow } from '../../Molecules/DownloadRow/DownloadRow';
import { checkbox, selectFilter } from '../../assets/js/downloadmodal';
import { CtaButton } from '../../Components/UIcomponents/Buttons/Cta_button/CtaButton';
import CustomSelect from '../../Components/Forms/Dropdowns/CustomSelect/CustomSelect';

export const Image_options = {
  True: '',
  False: 'modal-download',
};

export const Category_options = {
  Singlelanguage: 'list-language',
  Multiplelanguages: '',
};

export const DownloadModal = ({
  data, button, select, ...args
}) => {
  useEffect(() => {
    checkbox('.checkbox input', '.button-primary');
    selectFilter();
  }, []);

  let image_variant = Image_options[`${args.Image}`];
  let category_variant = Category_options[`${args.Category}`];
  return (
    <div className={['modal', `${image_variant}`].join(' ')} aria-modal="true" role="dialog" aria-label="download_modal">
      <div className="modal-content">
        <a href="javascript:void(0)" className="modal-close-button" aria-label="Close modal" />
        <div className="download-body">
          {args.Image === 'True' && (
          <div className="show-large">
            <Publicationthumb Hovercolors="yellow" />
          </div>
          )}
          <div className="download-content">
            {args.Category === 'Multiplelanguages' && <CustomSelect text={select} />}
            <div className={['download-list', `${category_variant}`].join(' ')}>
              {data.map((item, index) => (
                <DownloadRow title={item.title} subtitle={item.subtitle} datalang={item.datalang} key={index} value={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="download-footer">
          <CtaButton label={button} For_Primary="No Arrow" State="Disabled" />
        </div>
      </div>
    </div>
  );
};

DownloadModal.defaultProps = {
  Image: 'True',
  Category: 'Multiplelanguages',
};
