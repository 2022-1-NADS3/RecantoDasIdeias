using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace AppRecantoDasIdeias
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
        }

        private async void Proxima_pagina(object sender, EventArgs e)
        {
            await Navigation.PushAsync(new CadastroAluno());
        }

    }
}
