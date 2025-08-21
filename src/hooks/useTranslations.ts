export const useTranslations = (lang: 'ru' | 'kz') => {
  const translations = {
    ru: {
      title: "Оцените качество обслуживания по вашему обращению",
      appealInfo: {
        appealNumber: "Номер обращения",
        submissionDate: "Дата подачи", 
        completionDate: "Дата завершения",
        serviceResponse: "Ответ службы"
      },
      rating: {
        labels: [
          "Очень плохо",
          "Плохо", 
          "Удовлетворительно",
          "Хорошо",
          "Отлично"
        ]
      },
      comment: {
        placeholder: "Ваш комментарий…",
        counter: "символов"
      },
      submit: "Отправить отзыв",
      messages: {
        success: "Спасибо! Ваш отзыв отправлен.",
        invalidLink: "Отзыв уже был отправлен или ссылка недействительна.",
        serviceUnavailable: "Сервис временно недоступен.",
        selectRating: "Пожалуйста, выберите оценку.",
        commentTooLong: "Комментарий слишком длинный (500 символов).",
        confirmCaptcha: "Подтвердите, что вы не робот."
      }
    },
    kz: {
      title: "Осы өтініш бойынша қызмет сапасын бағалаңыз",
      appealInfo: {
        appealNumber: "Өтініш нөмірі",
        submissionDate: "Жіберілген күні",
        completionDate: "Аяқталған күні", 
        serviceResponse: "Қызмет жауабы"
      },
      rating: {
        labels: [
          "Өте нашар",
          "Нашар",
          "Қанағаттанарлық", 
          "Жақсы",
          "Тамаша"
        ]
      },
      comment: {
        placeholder: "Сіздің пікіріңіз…",
        counter: "таңба"
      },
      submit: "Пікірді жіберу",
      messages: {
        success: "Рахмет! Сіздің пікіріңіз жіберілді.",
        invalidLink: "Пікіріңіз бұрын жіберілген немесе сілтеме жарамсыз.",
        serviceUnavailable: "Қызмет уақытша қолжетімсіз.",
        selectRating: "Бағалауды таңдаңыз.",
        commentTooLong: "Пікір тым ұзақ (500 таңбадан артық).",
        confirmCaptcha: "Робот еместігіңізді растаңыз."
      }
    }
  };

  return translations[lang];
};