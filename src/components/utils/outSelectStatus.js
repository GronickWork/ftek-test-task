export default function outSelectStatus(type) {
    let options;
    switch(type) {
      case 'table-primary':
        options = (
          <>
            <option value="2">В пути</option>
            <option value="3">Доставлен</option>
            <option value="1">Ожидает отправки</option>
          </>
          )
        break;
      case 'table-success':
        options = (
          <>
            <option value="3">Доставлен</option>
            <option value="1">Ожидает отправки</option>
            <option value="2">В пути</option>
          </>
          )
        break;
      default:
        options = (
          <>
            <option value="1">Ожидает отправки</option>
            <option value="2">В пути</option>
            <option value="3">Доставлен</option>
          </>
          )
    };    
  return options;
}

