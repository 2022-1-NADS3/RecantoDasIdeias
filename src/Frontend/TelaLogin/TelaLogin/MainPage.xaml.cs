using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace TelaLogin
{
    public class Objeto
    {
        [JsonProperty("nome")]
        public string nome { get; set; }

        [JsonProperty("sobrenome")]
        public string sobrenome { get; set; }

        [JsonProperty("idade")]
        public int idade { get; set; }

        [JsonProperty("altura")]
        public float altura { get; set; }
    }
    public partial class MainPage : ContentPage
    {
        async void Dados(Objeto sender, EventArgs e)
        {
            var httpClient = new HttpClient();
            var resultados = await httpClient.GetStringAsync("IP");
            var resultadofinal = JsonConvert.DesarializedObject<Objeto>(resultados);

            json.text = resultados;
            UserFirstName.text = resultadofinal.nome;
            UserLastName.text = resultadofinal.sobrenome;
            UserAge.text = resultadofinal.idade.ToString();
            UserHeight.text = resultadofinal.altura.ToString();

        }
        public MainPage()
        {
            InitializeComponent();
        }
    }
}

