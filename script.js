import complaintTypeData from './category.json' assert { type: 'json' };
import countryCodeData from './countryCode.json' assert { type: 'json' };


const complaintType = document.getElementById('complaintType');
const categories = document.getElementById('category');
const countryCode = document.getElementById('countryCode')

complaintType.addEventListener('change', handleComplaintTypeChange);

document.addEventListener('DOMContentLoaded', () => {
    handleComplaintTypeChange();
    handleCountryCode();
});


function handleComplaintTypeChange() {
    complaintTypeData.Types.forEach(element => {
        if (element.Type === complaintType.value) {
            categories.innerHTML = "";
            element.Category.forEach(el => {
                var html = `<option value=${el}>${el}</option>`;
                categories.insertAdjacentHTML('beforeend', html);
            })
        }
    });
}

function handleCountryCode() {
    countryCode.innerHTML = '';
    countryCodeData.countries.forEach(el => {
        var html = `<option value=""${el.code}>${el.code} (${el.name})</option>`;
        countryCode.insertAdjacentHTML('beforeend', html)
    })
}
