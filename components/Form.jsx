/* eslint-disable jsx-a11y/label-has-associated-control */
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Form () {

  const hrefRef = React.createRef();
  
  function submitForm(e) {
    e.preventDefault();
    window.URL = window.URL || window.webkitURL;
    const fileUrl = window.URL.createObjectURL(hrefRef.current.files[0]);

    const info = {
      name: 'Alex',
      phone: '+79171919744',
      // typeBuild: ,
      // targetBuild: ,
      file: fileUrl,
    }
    
    
    fetch('/api/send-form-file', {
      method: 'POST', 
      body: JSON.stringify(info),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(( response ) => response.json()).then((data) => {
      // if (data.message === 'success') {setCleaner('clean')}
  
      // if (data.message === 'server erorr') {}
  
      // if (data.message === 'incorrect name') {setNameStatus('red--border--form')}
      // if (data.message === 'incorrect phone') {setPhoneStatus('red--border--form')}
      // if (data.message === 'incorrect type build') {setTypeBuildStatus('red--border--form')}
      // if (data.message === 'incorrect target build') {setTargetBuildStatus('red--border--form')}
    })
  }

  return (
    <div className='page-section__body'>
      <div className='other-page-section'>
        <blockquote>
          <p style={{paddingLeft: '30px'}}><span style={{color: '#ff6600'}}><strong>Отправьте нам заявку на предварительный расчет стоимости Вашего будущего строительства!</strong></span></p>
        </blockquote>
        <div role='form' className='wpcf7' id='wpcf7-f112-o1' lang='ru-RU' dir='ltr'>
          <div className='screen-reader-response' />

          <div className='screen-reader-response' role='alert'>
            Одно или несколько полей содержат ошибочные данные. Пожалуйста, проверьте их и попробуйте ещё раз.
            <p />
            <ul>
              <li>Поле обязательно для заполнения.</li>
              <li>Поле обязательно для заполнения.</li>
            </ul>
          </div>

          <form action='/raschet-stoimosti/#wpcf7-f112-o1' method='post' className='wpcf7-form' encType='multipart/form-data' noValidate='novalidate'>
            <div style={{display: 'none'}}>
              <input type='hidden' name='_wpcf7' value='112' />
              <br />
              <input type='hidden' name='_wpcf7_version' value='5.1.1' />
              <br />
              <input type='hidden' name='_wpcf7_locale' value='ru_RU' />
              <br />
              <input type='hidden' name='_wpcf7_unit_tag' value='wpcf7-f112-o1' />
              <br />
              <input type='hidden' name='_wpcf7_container_post' value='0' />
              <br />
              <input type='hidden' name='g-recaptcha-response' value='' />
            </div>
            <div className='callBackDescript'>Заполните все поля и нажмите кнопку отправить</div>
            <div className='callBackForm'>
              <label>
                <span className='item'>Имя*</span>
                <span className='wpcf7-form-control-wrap your-name'><input type='text' name='your-name' value='' size='40' className='wpcf7-form-control wpcf7-text wpcf7-validates-as-required' aria-required='true' aria-invalid='false' placeholder='Имя' /></span>
              </label>
              <br />
              <label>
                <span className='item'>Телефон*</span>
                <span className='wpcf7-form-control-wrap tel-983'><input type='tel' name='tel-983' value='' size='40' className='wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel tel' aria-required='true' aria-invalid='false' placeholder='Телефон' /></span>
              </label>
              <br />
              <label>
                <span className='item'>Тип строения</span>
                <span className='wpcf7-form-control-wrap menu-564'>
                  <select name='menu-564' className='wpcf7-form-control wpcf7-select' aria-invalid='false'>
                    <option value='' />
                    <option value='Склад'>Склад</option>
                    <option value='Ангар'>Ангар</option>
                    <option value='Бескаркасный ангар'>Бескаркасный ангар</option>
                    <option value='Пром. холидильник'>Пром. холидильник</option>
                  </select>
                </span>
              </label>
              <br />
              <label>
                <span className='item'>Назначение</span>
                <span className='wpcf7-form-control-wrap menu-569'>
                  <select name='menu-569' className='wpcf7-form-control wpcf7-select' aria-invalid='false'>
                    <option value='' />
                    <option value='Овощехранилище'>Овощехранилище</option>
                    <option value='Зернохранилище'>Зернохранилище</option>
                    <option value='Фруктохранилище'>Фруктохранилище</option>
                    <option value='Логистический центр'>Логистический центр</option>
                    <option value='Конюшня'>Конюшня</option>
                    <option value='Свинарник'>Свинарник</option>
                    <option value='Птицеферму'>Птицеферму</option>
                    <option value='Цех по переработки рыбы'>Цех по переработки рыбы</option>
                    <option value='др'>др</option>
                  </select>
                </span>
              </label>
              <br />
              <label>
                <span className='item'>Доп. информация </span>
                <span className='wpcf7-form-control-wrap textarea-711'><textarea name='textarea-711' cols='40' rows='10' className='wpcf7-form-control wpcf7-textarea' aria-invalid='false' /></span>
              </label>
              <br />
              <label>
                <span className='item fontSizeLitle'>Прикрепите документы </span>
                <span className='wpcf7-form-control-wrap file-122'><input ref={hrefRef} type='file' name='file-122' size='40' className='wpcf7-form-control wpcf7-file' accept='.jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.ppt,.pptx,.odt,.avi,.ogg,.m4a,.mov,.mp3,.mp4,.mpg,.wav,.wmv' aria-invalid='false' /></span>
              </label>
              <p />
              <p>  
                {' '}
                <label className='submitHeight'>
                  <span className='item' />
                  <input onClick={submitForm} type='submit' value='Отправить' className='wpcf7-form-control wpcf7-submit' />
                </label>
                <br />
                <label className='textPolicy'>
                  Нажимая на кнопку «Отправить», Вы автоматически соглашаетесь с
                  {' '}
                  <Link href='/privacy-policy/'><a style={{display: 'inline'}} target='_blank'>правилами обработки персональных данных.</a></Link>
                </label>
              </p>
            </div>
            <div className='wpcf7-response-output wpcf7-validation-errors' role='alert'>Одно или несколько полей содержат ошибочные данные. Пожалуйста, проверьте их и попробуйте ещё раз.</div>
            <div className='wpcf7-response-output wpcf7-display-none' />
          </form>
          <img src=''></img>
        </div>

      </div>
    </div>
  )
}