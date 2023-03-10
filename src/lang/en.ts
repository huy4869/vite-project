export default {

  common: {
    update: 'Cập nhật',
    more_update: 'Cập nhật thêm',
    action: 'Thao tác',
    'no-data': 'Không có dữ liệu',
    ok: 'Đồng ý',
    title: 'Amaisoft',
    confirm: 'Xác nhận',
    reject: 'Từ chối',
    access: 'Phê duyệt',
    'caps-lock-on': 'Caps lock đang bật',
    'confirm-delete': 'Bạn có chắc chắn muốn xoá?',
    'confirm-data':
      'Dữ liệu đã thay đổi. Bạn có chắc chắn muốn đóng nó không?',
    'confirm-status': 'Bạn có chắc chắn muốn thay đổi trạng thái không?',
    cancel: 'Hủy',
    delete: 'Xóa',
    edit: 'Sửa',
    save: 'Lưu',
    detail: 'Chi tiết',
    no_acc: 'Chưa có tài khoản? ',
    have_acc: 'Đã có tài khoản? ',
    register: 'Đăng ký',
    log_in: 'Đăng nhập',
    privacy: 'Điều khoản dịch vụ & Chính sách bảo mật',
    license: '©︎ 2022 Bản quyền bởi Amaisoft',
    copy_success: 'Sao chép thành công',
    copy_error: 'Sao chép thất bại',
    success_text: 'Success',
    error_text: 'Error',
    warning_text: 'Warning',
    info_text: 'Info'
  },

  noti: {
    success: 'Thành công rồi nà !',
    error: 'Lỗi rồi lè !',
    note: 'Chú ý !',
    ok: 'Okie bạn nhé!',
    register_success: 'Đăng ký thành công',
    logout_success: 'Đăng xuất thành công',
    logout_fail: 'Đã xảy ra lỗi',
    login_success: 'Đăng nhập thành công',
    reset_pass_success: 'Đổi mật khẩu thành công'
  },

  validation: {
    alpha: '{_field_} chỉ có thể chứa các kí tự chữ',
    alpha_dash:
      '{_field_} có thể chứa các kí tự chữ (A-Z a-z), số (0-9), gạch ngang (-) và gạch dưới (_)',
    alpha_num: '{_field_} chỉ có thể chứa các kí tự chữ và số',
    alpha_spaces: '{_field_} chỉ có thế chứa các kí tự và khoảng trắng',
    between:
      '{_field_} phải có giá trị nằm trong khoảng giữa {min} và {max}',
    confirmed: 'Mật khẩu không khớp. Vui lòng kiểm tra lại',
    digits: 'Trường {_field_} chỉ có thể chứa các kí tự số và bắt buộc phải có độ dài là {length}',
    dimensions:
      '{_field_} phải có chiều rộng {width} pixels và chiều cao {height} pixels',
    email: 'Email is incorrect format.',
    excluded: '{_field_} không phải là một giá trị hợp lệ',
    ext: '{_field_} phải là một tệp',
    image: 'Trường {_field_} phải là một ảnh',
    oneOf: '{_field_} không phải là một giá trị hợp lệ',
    max: '{_field_} không thể có nhiều hơn {length} kí tự',
    'max-html': '{_field_} không thể có nhiều hơn {length} kí tự',
    max_value: '{_field_} phải nhỏ hơn hoặc bằng {max}',
    mimes: '{_field_} phải chứa kiểu tệp phù hợp',
    min: '{_field_} phải chứa ít nhất {_length_} kí tự',
    min_value: '{_field_} phải lớn hơn hoặc bằng {min}',
    numeric: '{_field_} chỉ có thể có các kí tự số',
    regex: '{_field_} có định dạng không đúng',
    required: 'The {_field_} field is required',
    required_if: '{_field_} là bắt buộc',
    size: '{_field_} chỉ có thể chứa tệp nhỏ hơn {size}KB',
    double: '{_field_} phải là một số thập phân hợp lệ',
    'max-text': '{_field_} không thể có nhiều hơn {length} kí tự',
    'after-date': '{_field_} phải lớn hơn ngày có hiệu lực  ',
    'regex-number-phone': '{_field_} chỉ được nhập số',
    less_than_wage_max: 'Mức lương Từ phải nhỏ hơn mức lương Đến',
    phone: 'Số điện thoại không đúng định dạng',
    'before-date-today': '{_field_} phải nhỏ hơn ngày hiện tại  ',
    passNotMatch: 'Mật khẩu không khớp. Vui lòng kiểm tra lại',
    'file-send-offer': 'Vui lòng tài file có dung lượng tối đa 5MB',
    'check-start-time': 'Giờ kết thúc không thể nhỏ hơn giờ bắt đầu',
    'check-end-time': 'Giờ kết thúc không thể nhỏ hơn giờ bắt đầu',
    'confirm-password':
      'Mật khẩu mới và nhập lại mật khẩu phải trùng khớp.',
    'date-now': 'Ngày bắt đầu không thể nhỏ hơn ngày hiện tại',
    'max-number': 'Vui lòng tài file có dung lượng tối đa 5MB',
    'format-password':
      'Mật khẩu cần chứa 8-32 ký tự, bao gồm cả chữ hoa, chữ thường, số và ký tự đặc biệt.',
    'format-username':
      'Tên người dùng cần chứa 6 đến 32 ký tự, phải bắt đầu bằng một chữ cái và chỉ sử dụng các ký tự chữ thường(a-z), số(0-9), dấu gạch dưới ("_").',
    'max-file': 'Dung lượng file không được lớn hơn {size}MB',
    'max-file-num': 'Upload tối đa {_num_} file',
    'hour-now': 'Giờ bắt đầu không được nhỏ hơn giờ hiện tại',
    'is-after-now': 'Giờ bắt đầu không được nhỏ hơn giờ hiện tại',
    'confirm-new-password': 'Mật khẩu mới và mật khẩu cũ phải khác nhau',
    except_skill: 'Trường kỹ năng không được phép nhập trùng',
    'format-password-reset':
      'Mật khẩu cần chứa 8-16 ký tự, bao gồm cả chữ hoa, chữ thường, số và ký tự đặc biệt',
    array_required: '{_field_} không được để trống',
    required_range_date: '{_field_} không được để trống',
    time_range_min_minute: '{_field_} phải lớn hơn {min} phút',
    time_range_min: '{_field_} từ phải lớn hơn {min} ',
    min_price: '{_field_} phải lớn hơn hoặc bằng {min}',
    max_length_price: '{_field_} không thể có nhiều hơn {length} kí tự',
    has_error: 'Có lỗi xảy ra!',
    format_image:
      'Ảnh tải lên phải có định dạng JPG/JPEG/PNG và kích thước không vượt quá 10MB.',
    max_min: 'Giá trị max không nhỏ hơn giá trị min',
    'validate-price': 'Vui lòng nhập khoảng giá phù hợp',
    'validate-product-classification':
      'Vui lòng nhập đầy đủ tên và giá phân loại hàng',
    between_phone: '{_field_} phải từ {min} đến {max} ký tự',
    from_smaller_to: 'Giá gói từ phải nhỏ hơn đến',
    must_be_greater_than_from: 'Giá gói đến phải lớn hơn từ',
    max_day: '{_field_} phải lớn hơn {min}',
    'captcha_req': 'Vui lòng kiểm tra captcha'
  },
  header: {
    log_out: 'Đăng xuất'
  },
  route: {
    dashboard: 'Tổng quan'
  },
  navbar: {
    dashboard: 'Dashboard',
    logOut: 'Đăng xuất',
    profile: 'Trang cá nhân',
    setting: 'Cài đặt hệ thống',
    theme: 'Theme',
    'change-password': 'Đổi mật khẩu'
  },
  login: {
    title: 'Title',
    logIn: 'Log in',
    'placeholder-email': 'Nhập địa chỉ email',
    'placeholder-password': 'Nhập mật khẩu',
    email: 'Email',
    password: 'Mật khẩu',
    'remember-me': 'Ghi nhớ tôi',
    'forgot-password': 'Quên mật khẩu',
    'forgot-description-title': 'Nhập địa chỉ email đã đăng ký',
    send: 'Gửi',
    'new-password': 'Mật khẩu mới',
    're-new-password': 'Nhập lại mật khẩu',
    'reset-title': 'Đặt lại mật khẩu',
    'reset-title-password': 'Nhập mật khẩu mới',
    'reset-description-title': 'Hãy nhập mật khẩu mới',
    'back-login': 'Quay về trang đăng nhập',
    register: 'Bạn chưa có tài khoản? đăng ký mới ở đây.',
    'forgot-password-title': 'Link cài đặt mật khẩu mới đã được gửi',
    'forgot-password-content-1':
      'Đường dẫn cài đặt lại mật khẩu mới đã được gửi vào email của bạn',
    'forgot-password-content-2':
      'Vui lòng kiểm tra email để cài đặt lại mật khẩu mới.'
  },

  register: {
    title: 'Đăng ký',
    email: 'Email',
    password: 'Mật khẩu',
    'placeholder-email': 'Nhập địa chỉ email',
    'placeholder-password': 'Nhập mật khẩu',
    'password_confirmation': 'Xác nhận mật khẩu',
    referral_code: 'Mã giới thiệu'
  },

  otp: {
    'submit': 'xác nhận',
    'code': 'Mã xác minh Email',
    'notifySent': 'Nhập mã 6 chữ số được gửi đến {email}',
    'notReceived': 'Bạn chưa nhận được mã? ',
    'reqCode1': 'Yêu cầu mã mới trong ',
    'reqCode2': '{time} giây.',
    'resendCode': 'Gửi lại mã',
    'error': 'Mã không hợp lệ'
  },

  reset_pass: {
    title: 'Đổi mật khẩu',
    password: 'Mật khẩu mới',
    password_confirmation: 'Nhập lại mật khẩu mới',
    save: 'Đổi mật khẩu'
  },

  account: {
    'old-password': 'Mật khẩu cũ',
    'placeholder-old-password': 'Nhập mật khẩu cũ',
    'reset-password': 'Đổi mật khẩu',
    'placeholder-new-password': 'Nhập mật khẩu mới',
    'new-password': 'Mật khẩu mới',
    're-new-password': 'Nhập lại mật khẩu mới',
    save: 'Đổi mật khẩu',
    'security_verification': 'Xác minh bảo mật'

  }
}
